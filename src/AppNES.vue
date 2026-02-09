<template>
  <div id="app-nes">
    <!-- Navigation -->
    <nav class="nes-container is-dark nav-container">
      <div class="nav-content">
        <router-link class="nav-brand" to="/nes">
          <i class="nes-icon trophy is-small"></i>
          待辦事項管理
        </router-link>
        
        <div class="nav-links">
          <router-link 
            class="nes-btn is-small" 
            :class="{ 'is-primary': $route.name === 'HomeNES' }"
            to="/nes" 
          >
            首頁
          </router-link>
          <router-link 
            class="nes-btn is-small"
            :class="{ 'is-primary': $route.name === 'PrivacyNES' }"
            to="/nes/privacy"
          >
            版權宣告
          </router-link>
          <router-link 
            class="nes-btn is-small is-success"
            to="/"
          >
            切換到 Bootstrap
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="nes-container is-dark footer-container">
      <div class="footer-content">
        <p class="footer-text">© {{ currentYear }} 待辦事項管理系統 - 使用 Vue.js 與 NES.css 建立</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#app-nes {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Press Start 2P', cursive;
  background-color: #f8f8f8;
}

.nav-container {
  margin: 0;
  border-radius: 0;
  background-color: #212529;
  color: white;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-brand {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-brand:hover {
  color: #209cee;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.footer-container {
  margin: 0;
  border-radius: 0;
  background-color: #212529;
  color: white;
  margin-top: 2rem;
}

.footer-content {
  text-align: center;
  padding: 1rem;
}

.footer-text {
  margin: 0;
  font-size: 0.6rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .nav-links {
    width: 100%;
    justify-content: center;
  }
  
  .main-content {
    padding: 1rem 0;
  }
  
  .footer-text {
    font-size: 0.5rem;
  }
}
</style>
