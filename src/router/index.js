import { createRouter, createWebHistory } from 'vue-router'
import BooksList from '../views/BooksList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: BooksList,
    },
  ],
})

export default router
