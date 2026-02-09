import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import AppNES from '../AppNES.vue'
import HomeNES from '../views/HomeNES.vue'
import PrivacyNES from '../views/PrivacyNES.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/nes',
    component: AppNES,
    children: [
      {
        path: '',
        name: 'HomeNES',
        component: HomeNES
      },
      {
        path: 'privacy',
        name: 'PrivacyNES',
        component: PrivacyNES
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router