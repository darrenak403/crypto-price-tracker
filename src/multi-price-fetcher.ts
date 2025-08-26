// Multi-coin Price Fetcher - Ngày 12: Lấy giá nhiều coin
import fetch from 'node-fetch';
import * as fs from 'fs';

interface BinancePrice {
  symbol: string;
  price: string;
}

const coins = ["BTCUSDT", "ETHUSDT", "BNBUSDT"];

export async function getPrices(): Promise<void> {
  try {
    const results: BinancePrice[] = [];
    
    for (const coin of coins) {
      const url = `https://api.binance.com/api/v3/ticker/price?symbol=${coin}`;
      const response = await fetch(url);
      const data = await response.json() as BinancePrice;
      results.push(data);
    }
    
    console.log('📊 Giá các coin:');
    results.forEach(r => console.log(`${r.symbol}: ${r.price}`));

    // Lưu ra CSV
    const csvHeader = 'Symbol,Price,Timestamp\n';
    const csvData = results.map(r => `${r.symbol},${r.price},${new Date().toISOString()}`).join('\n');
    const csv = csvHeader + csvData;
    
    fs.writeFileSync('prices.csv', csv);
    console.log('💾 Đã lưu giá vào prices.csv');
    
  } catch (error) {
    console.error('❌ Error fetching prices:', error);
  }
}

// Test function - Always run when file is executed directly
getPrices();
