import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/LoginPage.vue')
    },
    {
      path: '/',
      component: () => import('@/views/Layout/LayoutPage.vue'),
      children: [
        { path: '', component: () => import('@/views/Home/HomePage.vue') },
        {
          path: 'category',
          component: () => import('@/views/Category/CategoryPage.vue')
        }
      ]
    }
  ]
})

export default router
