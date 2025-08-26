// WebSocket Real-time Price Tracker - Ngày 13: Websocket 
import WebSocket from 'ws';

interface BinanceStreamData {
  p: string; // price
  s: string; // symbol
  T: number; // timestamp
}

export class RealTimePriceTracker {
  private ws: WebSocket | null = null;
  private symbol: string;

  constructor(symbol: string = 'BTCUSDT') {
    this.symbol = symbol.toLowerCase();
  }

  start(): void {
    console.log(`🔴 Bắt đầu theo dõi ${this.symbol.toUpperCase()} real-time...`);
    
    const wsUrl = `wss://stream.binance.com:9443/ws/${this.symbol}@trade`;
    this.ws = new WebSocket(wsUrl);

    this.ws.on('open', () => {
      console.log('🟢 Kết nối WebSocket thành công!');
    });

    this.ws.on('message', (msg: Buffer) => {
      try {
        const data = JSON.parse(msg.toString()) as BinanceStreamData;
        console.log(`${data.s}: ${data.p} USDT`);
      } catch (error) {
        console.error('❌ Lỗi parse data:', error);
      }
    });

    this.ws.on('close', () => {
      console.log('🔴 WebSocket đã đóng');
    });

    this.ws.on('error', (error) => {
      console.error('❌ WebSocket error:', error);
    });
  }

  stop(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      console.log('⏹️ Đã dừng theo dõi');
    }
  }
}

// Test function - Always run when file is executed directly
const tracker = new RealTimePriceTracker('BTCUSDT');
tracker.start();

// Dừng sau 30 giây để test
setTimeout(() => {
  tracker.stop();
  process.exit(0);
}, 30000);
