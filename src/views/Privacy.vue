<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h2 class="card-title mb-0">
              <i class="bi bi-shield-check"></i> 版權宣告
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
                <h5><i class="bi bi-info-circle text-info"></i> 應用資訊</h5>
                <ul class="list-unstyled">
                  <li><strong>應用名稱：</strong>待辦事項管理系統</li>
                  <li><strong>版本：</strong>1.0.0</li>
                  <li><strong>開發框架：</strong>Vue.js 3</li>
                  <li><strong>UI 框架：</strong>Bootstrap 5</li>
                  <li><strong>狀態管理：</strong>Pinia</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5><i class="bi bi-calendar text-warning"></i> 開發資訊</h5>
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
              <h5><i class="bi bi-c-circle text-danger"></i> 版權聲明</h5>
              <p class="text-muted">
                © {{ currentYear }} 待辦事項管理系統。保留所有權利。
              </p>
              <p class="small text-muted">
                本應用程式僅供學習和展示用途使用。使用本系統即表示您同意遵守相關使用條款。
              </p>
            </div>
            
            <div class="alert alert-info">
              <h6><i class="bi bi-lightbulb"></i> 功能特色</h6>
              <ul class="mb-0">
                <li>響應式設計，支援桌面和行動裝置</li>
                <li>直觀的用戶介面與操作體驗</li>
                <li>完整的待辦事項 CRUD 功能</li>
                <li>即時狀態管理與資料持久化</li>
                <li>現代化的 Web 技術堆疊</li>
              </ul>
            </div>
            
            <div class="text-center mt-4">
              <router-link to="/" class="btn btn-primary">
                <i class="bi bi-house"></i> 回到首頁
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
.card-header {
  border-bottom: none;
}

.alert {
  border-left: 4px solid #17a2b8;
}
</style>