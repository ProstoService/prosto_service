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
        component: () => import('@/components/Home'),
        meta: {
          title: ''
        }
      },
      {
        path: '/',
        component: () => import('@/components/BaseTemplate'),
        children: [
          {
            path: 'about',
            name: 'About',
            component: () => import('@/components/About'),
            meta: {
              title: 'О нас'
            }
          },
          {
            path: 'services',
            name: 'Service',
            component: () => import('@/components/Services'),
            meta: {
              title: 'Услуги'
            }
          },
          {
            path: 'products',
            name: 'Products',
            component: () => import('@/components/Products'),
            meta: {
              title: 'Товары'
            }
          },
          {
            path: 'contacts',
            name: 'Contacts',
            component: () => import('@/components/Contacts'),
            meta: {
              title: 'Контакты'
            }
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
            component: () => import('@/components/NotFound'),
            meta: {
              title: 'Страница не найдена'
            }
          }
        ]
      }
    ]
  }
)

const globalTitle = 'Prosto Service'

router.beforeEach((to, from, next) => {
  if (to.meta.title === '') {
    document.title = globalTitle
  } else {
    document.title = to.meta.title + ' | ' + globalTitle
  }
  next()
})

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
