// WebSocket Real-time Price Tracker - Ngày 13: Websocket 
import WebSocket from 'ws';
export class RealTimePriceTracker {
    ws = null;
    symbol;
    constructor(symbol = 'BTCUSDT') {
        this.symbol = symbol.toLowerCase();
    }
    start() {
        console.log(`🔴 Bắt đầu theo dõi ${this.symbol.toUpperCase()} real-time...`);
        const wsUrl = `wss://stream.binance.com:9443/ws/${this.symbol}@trade`;
        this.ws = new WebSocket(wsUrl);
        this.ws.on('open', () => {
            console.log('🟢 Kết nối WebSocket thành công!');
        });
        this.ws.on('message', (msg) => {
            try {
                const data = JSON.parse(msg.toString());
                console.log(`${data.s}: ${data.p} USDT`);
            }
            catch (error) {
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
    stop() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
            console.log('⏹️ Đã dừng theo dõi');
        }
    }
}
// Test function
if (process.argv[1] === new URL(import.meta.url).pathname) {
    const tracker = new RealTimePriceTracker('BTCUSDT');
    tracker.start();
    // Dừng sau 30 giây để test
    setTimeout(() => {
        tracker.stop();
        process.exit(0);
    }, 30000);
}
//# sourceMappingURL=realtime-tracker.js.map