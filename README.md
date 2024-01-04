# 遊戲王網站卡壇後端

這個專案是遊戲王網站 (https://cardtime.tw) 卡壇的後端服務，使用 TypeScript、Fastify 和 MongoDB 來構建。本後端負責處理用戶請求，提供卡牌資訊，並管理卡壇的互動功能。

## 特點

- **TypeScript**: 提供強型別支持，增強代碼質量和可維護性。
- **Fastify**: 高效能的 Node.js web 框架，提供快速的路由和響應處理。
- **MongoDB**: 靈活的 NoSQL 數據庫，適合處理大量的卡牌數據和用戶互動。

## 開始使用

在開始之前，確保你已經安裝了 Node.js 和 MongoDB。接著，遵循以下步驟來設置和運行後端。

1. **克隆倉庫**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository


   ```

2. **安裝依賴**

   ```bash
   yarn
   ```

3. **安裝依賴**

   ```bash
   yarn
   ```

4. **設置環境變數**

   ```bash
   創建一個 .env 檔案並配置必要的環境變數
   ```

5. **啟動服務**

   ```bash
   yarn start
   ```

## 結構

- src/: 源碼目錄。
- models/: MongoDB 模型。
- routes/: Fastify 路由。
- services/: 業務邏輯。
- config/: 配置文件。
- index.ts: 應用入口點。
- test/: 測試腳本。
