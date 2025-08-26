# 🚀 Crypto Price Tracker - TypeScript Learning Project

Dự án học TypeScript kết hợp thực hành API và WebSocket để lấy giá coin từ sàn Binance.

## 🎯 Mục tiêu học tập

- Biết sử dụng TypeScript để gọi API (lấy giá coin từ sàn)
- Hiểu dữ liệu JSON trả về và cách parse trong TS
- Thực hành viết code lấy dữ liệu giá coin
- Làm quen với WebSocket để lấy giá real-time

## 📁 Cấu trúc Project

```
src/
├── index.ts              # Main entry point
├── price-fetcher.ts      # Ngày 10-11: Lấy giá 1 coin
├── multi-price-fetcher.ts # Ngày 12: Lấy giá nhiều coin + CSV
├── realtime-tracker.ts   # Ngày 13: WebSocket real-time
└── price-tracker.ts      # Ngày 14: Mini Project hoàn chỉnh
```

## 🚀 Cách chạy

### Cài đặt dependencies

```bash
npm install
```

### Chạy các module học tập

```bash
# Xem thông tin project
npm run dev

# Ngày 10-11: Lấy giá BTC/USDT
npm run price

# Ngày 12: Lấy giá nhiều coin và lưu CSV
npm run multi

# Ngày 13: WebSocket real-time BTC/USDT
npm run realtime

# Ngày 14: Mini Project - Interactive tracker
npm run tracker
```

## 📘 Lộ trình học (14 ngày)

### **Ngày 8-9: Ôn TypeScript cơ bản**

- Kiểu dữ liệu: string, number, boolean, array, object
- Cấu trúc: if, for, while
- Hàm, import/export module
- Promise, async/await

### **Ngày 10-11: Làm quen với API**

- File: `src/price-fetcher.ts`
- API là gì, REST API, JSON data
- Gọi API bằng fetch trong Node.js
- Lấy giá BTC/USDT từ Binance

### **Ngày 12: Lấy giá nhiều coin**

- File: `src/multi-price-fetcher.ts`
- Viết hàm gọi API lấy giá nhiều coin (BTC, ETH, BNB)
- Xuất dữ liệu ra console và lưu vào CSV

### **Ngày 13: WebSocket – giá real-time**

- File: `src/realtime-tracker.ts`
- Khác biệt REST API vs WebSocket
- Sử dụng package ws trong Node.js
- Theo dõi giá BTC/USDT real-time

### **Ngày 14: Mini Project – Crypto Price Tracker**

- File: `src/price-tracker.ts`
- Người dùng nhập tên coin
- In giá real-time bằng WebSocket
- Lưu giá mỗi phút vào file CSV

## 🛠️ Dependencies

- **TypeScript**: Ngôn ngữ chính
- **node-fetch**: Gọi REST API
- **ws**: WebSocket client
- **tsx**: Chạy TypeScript trực tiếp

## 📊 Ví dụ Output

### Price Fetcher

```
Giá BTCUSDT: 43250.50
```

### Multi Price Fetcher

```
📊 Giá các coin:
BTCUSDT: 43250.50
ETHUSDT: 2580.75
BNBUSDT: 425.30
💾 Đã lưu giá vào prices.csv
```

### Real-time Tracker

```
🟢 Kết nối WebSocket thành công!
BTCUSDT: 43250.50 USDT
BTCUSDT: 43251.00 USDT
BTCUSDT: 43249.75 USDT
```

## ⚡ Lưu ý

1. **API Binance**: Sử dụng API công khai, không cần API key
2. **Rate Limits**: Binance có giới hạn request, tránh spam
3. **WebSocket**: Kết nối real-time, nhớ đóng khi không dùng
4. **Files**: CSV sẽ được tạo tự động khi chạy

## 🎓 Kết quả cuối tuần

Sau khi hoàn thành:

- ✅ Viết được code TypeScript cơ bản
- ✅ Biết gọi REST API lấy giá coin từ Binance
- ✅ Theo dõi giá coin real-time bằng WebSocket
- ✅ Hoàn thành mini project Price Tracker
- ✅ Sẵn sàng bước sang Trading Bot (Tuần 3-4)

## 📝 License

MIT License - Dự án học tập
