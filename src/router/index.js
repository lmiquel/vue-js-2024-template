import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdidasView from '../views/AdidasView.vue'
import NikeView from '../views/NikeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/adidas',
      name: 'adidas',
      component: AdidasView,
    },
    {
      path: '/nike',
      name: 'nike',
      component: NikeView,
    },
  ],
})

export default router
