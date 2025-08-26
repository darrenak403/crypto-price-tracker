// Mini Project - Crypto Price Tracker - Ngày 14
import WebSocket from 'ws';
import * as fs from 'fs';
import * as readline from 'readline';
export class CryptoPriceTracker {
    ws = null;
    symbol = '';
    lastPrice = '';
    priceInterval = null;
    async start() {
        console.log('🚀 === CRYPTO PRICE TRACKER ===');
        console.log('Ví dụ: ETHUSDT, BTCUSDT, BNBUSDT');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const coin = await new Promise((resolve) => {
            rl.question('💰 Nhập tên coin (ví dụ: ETHUSDT): ', (answer) => {
                rl.close();
                resolve(answer.toUpperCase());
            });
        });
        this.symbol = coin;
        this.connectWebSocket();
        this.startPriceSaving();
        console.log('⏹️  Nhấn Ctrl+C để dừng');
    }
    connectWebSocket() {
        const wsUrl = `wss://stream.binance.com:9443/ws/${this.symbol.toLowerCase()}@trade`;
        console.log(`🔌 Đang kết nối tới ${this.symbol}...`);
        this.ws = new WebSocket(wsUrl);
        this.ws.on('open', () => {
            console.log('🟢 Kết nối thành công! Đang theo dõi giá real-time...\n');
        });
        this.ws.on('message', (msg) => {
            try {
                const data = JSON.parse(msg.toString());
                this.lastPrice = data.p;
                const time = new Date().toLocaleTimeString();
                console.log(`📊 [${time}] ${data.s}: $${data.p}`);
            }
            catch (error) {
                console.error('❌ Lỗi parse data:', error);
            }
        });
        this.ws.on('close', () => {
            console.log('🔴 Kết nối WebSocket đã đóng');
        });
        this.ws.on('error', (error) => {
            console.error('❌ WebSocket error:', error);
        });
    }
    startPriceSaving() {
        // Lưu giá mỗi phút
        this.priceInterval = setInterval(() => {
            if (this.lastPrice) {
                const timestamp = new Date().toISOString();
                const csvLine = `${this.symbol},${this.lastPrice},${timestamp}\n`;
                fs.appendFileSync('price-history.csv', csvLine);
                console.log(`💾 Đã lưu giá: ${this.symbol} = $${this.lastPrice}`);
            }
        }, 60000); // 60 giây
    }
    stop() {
        if (this.ws) {
            this.ws.close();
        }
        if (this.priceInterval) {
            clearInterval(this.priceInterval);
        }
        console.log('⏹️ Đã dừng Price Tracker');
    }
}
// Chạy program
if (process.argv[1] === new URL(import.meta.url).pathname) {
    const tracker = new CryptoPriceTracker();
    // Xử lý Ctrl+C
    process.on('SIGINT', () => {
        console.log('\n🛑 Đang dừng...');
        tracker.stop();
        process.exit(0);
    });
    tracker.start().catch(console.error);
}
//# sourceMappingURL=price-tracker.js.map