<template>
  <div class="nes-container">
    <div class="nes-content">
      <div class="nes-container is-dark with-title">
        <p class="title">版權宣告</p>
        <div class="content-section">
          <div class="text-center">
            <h3 class="nes-text is-primary">待辦事項管理系統</h3>
            <p class="nes-text">Todo Management System</p>
          </div>
        </div>
      </div>

      <div class="info-grid">
        <div class="nes-container is-rounded with-title">
          <p class="title">應用資訊</p>
          <div class="info-list">
            <p><span class="label">應用名稱：</span>待辦事項管理系統</p>
            <p><span class="label">版本：</span>1.0.0</p>
            <p><span class="label">開發框架：</span>Vue.js 3</p>
            <p><span class="label">UI 框架：</span>NES.css</p>
            <p><span class="label">狀態管理：</span>Pinia</p>
          </div>
        </div>

        <div class="nes-container is-rounded with-title">
          <p class="title">開發資訊</p>
          <div class="info-list">
            <p><span class="label">開發年份：</span>2024</p>
            <p><span class="label">最後更新：</span>{{ currentDate }}</p>
            <p><span class="label">許可類型：</span>MIT License</p>
            <p><span class="label">開發目的：</span>學習與展示</p>
          </div>
        </div>
      </div>

      <div class="nes-container is-rounded">
        <div class="content-section">
          <h5 class="section-title">版權聲明</h5>
          <p class="nes-text">
            © {{ currentYear }} 待辦事項管理系統。保留所有權利。
          </p>
          <p class="nes-text is-disabled small-text">
            本應用程式僅供學習和展示用途使用。使用本系統即表示您同意遵守相關使用條款。
          </p>
        </div>
      </div>

      <div class="nes-container is-rounded with-title">
        <p class="title">功能特色</p>
        <div class="lists">
          <ul class="nes-list is-disc">
            <li>響應式設計，支援桌面和行動裝置</li>
            <li>直觀的用戶介面與操作體驗</li>
            <li>完整的待辦事項 CRUD 功能</li>
            <li>即時狀態管理與資料持久化</li>
            <li>現代化的 Web 技術堆疊</li>
            <li>懷舊的 8-bit NES 風格主題</li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <router-link to="/nes" class="nes-btn is-primary">回到首頁</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
const currentDate = computed(() => new Date().toLocaleString('zh-TW'))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.nes-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Press Start 2P', cursive;
}

.nes-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-center {
  text-align: center;
}

.content-section {
  padding: 1rem 0;
}

.section-title {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-list {
  line-height: 2;
}

.info-list p {
  margin: 0.5rem 0;
  font-size: 0.75rem;
}

.label {
  color: #209cee;
  font-weight: bold;
}

.small-text {
  font-size: 0.6rem;
  line-height: 1.5;
}

.lists {
  font-size: 0.75rem;
  line-height: 2;
}

/* Responsive design */
@media (max-width: 768px) {
  .nes-container {
    padding: 1rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .info-list p {
    font-size: 0.6rem;
  }
}
</style>
