// Basic Price Fetcher - Ngày 10-11: API calls
import fetch from 'node-fetch';
export async function getPrice(symbol = 'BTCUSDT') {
    try {
        const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Giá ${symbol}:`, data.price);
    }
    catch (error) {
        console.error('Error fetching price:', error);
    }
}
// Test function
if (require.main === module) {
    getPrice();
}
//# sourceMappingURL=price-fetcher.js.map