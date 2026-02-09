<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <span class="material-icons">check_box</span>
          待辦事項管理
        </router-link>
        
        <div class="navbar-nav">
          <router-link 
            class="nav-link" 
            to="/" 
            :class="{ active: $route.name === 'Home' }"
          >
            <span class="material-icons">home</span> 首頁
          </router-link>
          <router-link 
            class="nav-link" 
            to="/privacy"
            :class="{ active: $route.name === 'Privacy' }"
          >
            <span class="material-icons">shield</span> 版權宣告
          </router-link>
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
.navbar {
  background-color: #1976d2;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
}

.navbar-brand .material-icons {
  font-size: 1.5rem;
}

.navbar-nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-link .material-icons {
  font-size: 1.25rem;
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
  color: #666;
  padding: 1.5rem 0;
  margin-top: 3rem;
}

.footer p {
  margin: 0;
}
</style>
