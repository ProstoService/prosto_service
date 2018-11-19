import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router(
  {
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/components/Home')
      },
      {
        path: '/',
        component: () => import('@/components/BaseTemplate'),
        children: [
          {
            path: 'about',
            name: 'About',
            component: () => import('@/components/About')
          },
          {
            path: 'services',
            name: 'Service',
            component: () => import('@/components/Services')
          },
          {
            path: 'products',
            name: 'Products',
            component: () => import('@/components/Products')
          },
          {
            path: 'contacts',
            name: 'Contacts',
            component: () => import('@/components/Contacts')
          }
        ]
      },
      {
        path: '*',
        component: () => import('@/components/BaseTemplate'),
        children: [
          {
            path: '',
            name: 'NotFound',
            component: () => import('@/components/NotFound')
          }
        ]
      }
    ]
  }
)

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
