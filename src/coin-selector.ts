// Interactive Coin Price Selector
import fetch from 'node-fetch';
import * as readline from 'readline';

interface BinancePrice {
  symbol: string;
  price: string;
}

const popularCoins = [
  'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'ADAUSDT', 
  'SOLUSDT', 'XRPUSDT', 'DOTUSDT', 'MATICUSDT',
  'AVAXUSDT', 'LINKUSDT', 'UNIUSDT', 'ATOMUSDT'
];

async function getPrice(symbol: string): Promise<void> {
  try {
    console.log(`🔄 Đang lấy giá ${symbol}...`);
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json() as BinancePrice;
    console.log(`💰 ${symbol}: $${parseFloat(data.price).toLocaleString()}`);
    console.log(`📊 Giá chính xác: ${data.price} USDT`);
  } catch (error) {
    console.error(`❌ Không thể lấy giá ${symbol}. Coin có thể không tồn tại hoặc lỗi API.`);
  }
}

async function startCoinSelector(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('🚀 === COIN PRICE SELECTOR ===');
  console.log('');
  console.log('🪙 Coins phổ biến:');
  console.log('  ', popularCoins.join(', '));
  console.log('');
  console.log('💡 Ví dụ: ETHUSDT, SOLUSDT, XRPUSDT');
  console.log('⚠️  Lưu ý: Phải có đuôi USDT (VD: BTCUSDT không phải BTC)');
  console.log('');

  const askForCoin = () => {
    rl.question('🔍 Nhập symbol coin (hoặc "exit" để thoát): ', async (input) => {
      const symbol = input.trim().toUpperCase();
      
      if (symbol === 'EXIT' || symbol === 'QUIT') {
        console.log('👋 Tạm biệt!');
        rl.close();
        return;
      }
      
      if (!symbol) {
        console.log('❌ Vui lòng nhập symbol coin.');
        askForCoin();
        return;
      }
      
      await getPrice(symbol);
      console.log('');
      askForCoin(); // Tiếp tục hỏi
    });
  };

  askForCoin();
}

// Chạy interactive selector
startCoinSelector().catch(console.error);
