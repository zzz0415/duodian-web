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
        component: () => import('@/views/home/HomeIndex.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/classify',
        component: () => import('@/views/classify/ClassifyIndex.vue'),
        meta: {
          title: '分类'
        }
      },
      {
        path: '/car',
        component: () => import('@/views/car/CarIndex.vue'),
        meta: {
          isAuthentivated: true,
          title: '购物车'
        }
      },
      {
        path: '/mine',
        component: () => import('@/views/mine/MineIndex.vue'),
        meta: {
          isAuthentivated: true,
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/details/:id',
    component: () => import('@/views/details/DetailsIndex.vue'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/search',
    component: () => import('@/views/search/SearchIndex.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginIndex.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/map',
    component: () => import('@/views/map/MapIndex.vue'),
    meta: {
      title: '定位'
    }
  },
  {
    path: '/geolocation',
    component: () => import('@/views/geolocation/GeoLocation.vue'),
    meta: {
      title: '正在定位'
    }
  },
  {
    path: '/address',
    component: () => import('@/views/address/AddressIndex.vue'),
    meta: {
      title: '选择地址'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthentivated) {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
