<template>
  <div class="container mt-4">
    <div class="content-wrapper">
      <div class="card">
        <div class="card-header">
          <h2 class="card-header-title">
            <span class="material-icons">shield</span> 版權宣告
          </h2>
        </div>
        <div class="card-body">
          <div class="text-center mb-4">
            <h3 class="app-title">待辦事項管理系統</h3>
            <p class="app-subtitle">Todo Management System</p>
          </div>
          
          <hr class="divider">
          
          <div class="info-grid">
            <div class="info-section">
              <h5 class="section-title">
                <span class="material-icons">info</span> 應用資訊
              </h5>
              <ul class="info-list">
                <li><strong>應用名稱：</strong>待辦事項管理系統</li>
                <li><strong>版本：</strong>1.0.0</li>
                <li><strong>開發框架：</strong>Vue.js 3</li>
                <li><strong>UI 框架：</strong>Material Web</li>
                <li><strong>狀態管理：</strong>Pinia</li>
              </ul>
            </div>
            <div class="info-section">
              <h5 class="section-title">
                <span class="material-icons">calendar_today</span> 開發資訊
              </h5>
              <ul class="info-list">
                <li><strong>開發年份：</strong>2024</li>
                <li><strong>最後更新：</strong>{{ currentDate }}</li>
                <li><strong>許可類型：</strong>MIT License</li>
                <li><strong>開發目的：</strong>學習與展示</li>
              </ul>
            </div>
          </div>
          
          <hr class="divider">
          
          <div class="text-center">
            <h5 class="section-title">
              <span class="material-icons">copyright</span> 版權聲明
            </h5>
            <p class="copyright-text">
              © {{ currentYear }} 待辦事項管理系統。保留所有權利。
            </p>
            <p class="copyright-note">
              本應用程式僅供學習和展示用途使用。使用本系統即表示您同意遵守相關使用條款。
            </p>
          </div>
          
          <div class="alert-info">
            <h6 class="alert-title">
              <span class="material-icons">lightbulb</span> 功能特色
            </h6>
            <ul class="feature-list">
              <li>響應式設計，支援桌面和行動裝置</li>
              <li>直觀的用戶介面與操作體驗</li>
              <li>完整的待辦事項 CRUD 功能</li>
              <li>即時狀態管理與資料持久化</li>
              <li>現代化的 Web 技術堆疊</li>
            </ul>
          </div>
          
          <div class="text-center mt-4">
            <router-link to="/" class="back-link">
              <md-filled-button>
                <span class="material-icons" slot="icon">home</span>
                回到首頁
              </md-filled-button>
            </router-link>
          </div>
        </div>
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
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-header {
  background-color: #1976d2;
  color: white;
  padding: 1.5rem;
}

.card-header-title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
}

.card-body {
  padding: 2rem;
}

.app-title {
  color: #1976d2;
  margin: 0 0 0.5rem 0;
}

.app-subtitle {
  color: #666;
  margin: 0;
}

.divider {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 2rem 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  margin: 0 0 1rem 0;
}

.section-title .material-icons {
  color: #1976d2;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  padding: 0.5rem 0;
}

.copyright-text {
  color: #666;
  margin: 1rem 0;
}

.copyright-note {
  font-size: 0.875rem;
  color: #999;
  margin: 0;
}

.alert-info {
  background-color: #e3f2fd;
  border-left: 4px solid #1976d2;
  padding: 1.5rem;
  border-radius: 4px;
  margin: 2rem 0;
}

.alert-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
  color: #1976d2;
}

.feature-list {
  margin: 0;
  padding-left: 1.5rem;
}

.feature-list li {
  padding: 0.25rem 0;
}

.back-link {
  text-decoration: none;
}
</style>