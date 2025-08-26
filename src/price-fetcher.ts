// Basic Price Fetcher - Ngày 10-11: API calls
import fetch from 'node-fetch';

interface BinancePrice {
  symbol: string;
  price: string;
}

export async function getPrice(symbol: string = 'BTCUSDT'): Promise<void> {
  try {
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json() as BinancePrice;
    console.log(`💰 Giá ${symbol}: ${data.price} USDT`);
  } catch (error) {
    console.error(`❌ Lỗi khi lấy giá ${symbol}:`, error);
  }
}

// Lấy tham số từ command line hoặc dùng mặc định
const symbol = process.argv[2] || 'BTCUSDT';
console.log(`🔍 Đang lấy giá cho: ${symbol}`);
getPrice(symbol.toUpperCase());
