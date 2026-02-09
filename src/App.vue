<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="top-app-bar">
      <div class="container">
        <div class="nav-content">
          <router-link class="nav-title" to="/">
            <span class="material-icons">task_alt</span>
            <span>待辦事項管理</span>
          </router-link>
          
          <div class="nav-actions">
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ active: $route.name === 'Home' }"
            >
              <span class="material-icons">home</span>
              <span>首頁</span>
            </router-link>
            <router-link 
              to="/privacy"
              class="nav-link"
              :class="{ active: $route.name === 'Privacy' }"
            >
              <span class="material-icons">shield</span>
              <span>版權宣告</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="mb-0">© {{ currentYear }} 待辦事項管理系統 - 使用 Vue.js 與 Material Web 建立</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.top-app-bar {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  min-height: 64px;
}

.nav-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--md-sys-color-on-primary);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
}

.nav-title:hover {
  opacity: 0.9;
}

.nav-actions {
  display: flex;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  color: var(--md-sys-color-on-primary);
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 500;
}

.nav-link .material-icons {
  font-size: 20px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.footer {
  background-color: #f5f5f5;
  text-align: center;
  color: #6c757d;
  padding: 24px 0;
  margin-top: 3rem;
}

.footer p {
  margin: 0;
}
</style>
