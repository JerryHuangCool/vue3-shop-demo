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
          path: 'cart',
          component: () => import('@/views/Cart/CartPage.vue')
        },
        {
          path: 'order',
          component: () => import('@/views/Checkout/CheckoutPage.vue')
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/PayPage.vue')
        },
        {
          path: 'paycallback',
          component: () => import('@/views/Pay/PayBackPage.vue')
        },
        {
          path: 'member',
          component: () => import('@/views/Member/MemberPage.vue'),
          children: [
            {
              path: '',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              component: () => import('@/views/Member/components/UserOrder.vue')
            }
          ]
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
