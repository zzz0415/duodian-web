import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/main/MainIndex.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/HomeIndex.vue')
      },
      {
        path: '/classify',
        component: () => import('@/views/classify/ClassifyIndex.vue')
      },
      {
        path: '/car',
        component: () => import('@/views/car/CarIndex.vue')
      },
      {
        path: '/mine',
        component: () => import('@/views/mine/MineIndex.vue')
      }
    ]
  },
  {
    path: '/details/:id',
    component: () => import('@/views/details/DetailsIndex.vue')
  },
  {
    path: '/search',
    component: () => import('@/views/search/SearchIndex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
