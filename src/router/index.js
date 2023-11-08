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
      redirect: '/home',
      component: () => import('@/views/Layout/LayoutPage.vue'),
      children: [
        { path: '/home', component: () => import('@/views/Home/HomePage.vue') },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/CategoryPage.vue')
        }
      ]
    }
  ]
})

export default router
