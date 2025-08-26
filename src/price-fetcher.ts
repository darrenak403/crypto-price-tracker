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
    const data = await response.json() as BinancePrice;
    console.log(`Giá ${symbol}:`, data.price);
  } catch (error) {
    console.error('Error fetching price:', error);
  }
}

// Test function - Always run when file is executed directly
getPrice();
