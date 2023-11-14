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
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/SubCategory/SubCategoryPage.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/DetailPage.vue')
        },
        {
          path: '/cart',
          component: () => import('@/views/Cart/CartPage.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    // ...
    return {
      top: 0
    }
  }
})

export default router
