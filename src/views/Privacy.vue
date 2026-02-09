<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title mb-0" style="display: flex; align-items: center; gap: 8px;">
              <span class="material-icons">shield</span>
              <span>版權宣告</span>
            </h2>
          </div>
          <div class="card-body">
            <div class="text-center mb-4">
              <h3 class="text-primary">待辦事項管理系統</h3>
              <p class="text-muted">Todo Management System</p>
            </div>
            
            <hr>
            
            <div class="row">
              <div class="col-md-6">
                <h5 style="display: flex; align-items: center; gap: 8px;">
                  <span class="material-icons" style="color: #2196f3;">info</span>
                  <span>應用資訊</span>
                </h5>
                <ul class="list-unstyled">
                  <li><strong>應用名稱：</strong>待辦事項管理系統</li>
                  <li><strong>版本：</strong>1.0.0</li>
                  <li><strong>開發框架：</strong>Vue.js 3</li>
                  <li><strong>UI 框架：</strong>Material Web</li>
                  <li><strong>狀態管理：</strong>Pinia</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5 style="display: flex; align-items: center; gap: 8px;">
                  <span class="material-icons" style="color: #ff9800;">event</span>
                  <span>開發資訊</span>
                </h5>
                <ul class="list-unstyled">
                  <li><strong>開發年份：</strong>2024</li>
                  <li><strong>最後更新：</strong>{{ currentDate }}</li>
                  <li><strong>許可類型：</strong>MIT License</li>
                  <li><strong>開發目的：</strong>學習與展示</li>
                </ul>
              </div>
            </div>
            
            <hr>
            
            <div class="text-center">
              <h5 style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                <span class="material-icons" style="color: #f44336;">copyright</span>
                <span>版權聲明</span>
              </h5>
              <p class="text-muted">
                © {{ currentYear }} 待辦事項管理系統。保留所有權利。
              </p>
              <p class="small text-muted">
                本應用程式僅供學習和展示用途使用。使用本系統即表示您同意遵守相關使用條款。
              </p>
            </div>
            
            <div class="alert">
              <h6 style="display: flex; align-items: center; gap: 8px;">
                <span class="material-icons" style="font-size: 20px;">lightbulb</span>
                <span>功能特色</span>
              </h6>
              <ul class="mb-0">
                <li>響應式設計，支援桌面和行動裝置</li>
                <li>直觀的用戶介面與操作體驗</li>
                <li>完整的待辦事項 CRUD 功能</li>
                <li>即時狀態管理與資料持久化</li>
                <li>現代化的 Web 技術堆疊</li>
              </ul>
            </div>
            
            <div class="text-center mt-4">
              <router-link to="/" style="text-decoration: none;">
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
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
const currentDate = computed(() => new Date().toLocaleString('zh-TW'))
</script>

<style scoped>
hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 1.5rem 0;
}

h3 {
  margin-bottom: 0.5rem;
}

h5 {
  margin-bottom: 1rem;
  color: var(--md-sys-color-on-surface);
}

.small {
  font-size: 0.875rem;
}

md-filled-button {
  --md-filled-button-container-color: var(--md-sys-color-primary);
  --md-filled-button-label-text-color: var(--md-sys-color-on-primary);
}
</style>