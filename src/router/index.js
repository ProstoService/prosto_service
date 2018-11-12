import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home'
import AboutPage from '@/components/About'
import ServicesPage from '@/components/Service'
import GoodsPage from '@/components/Goods'
import PricesPage from '@/components/Prices'
import ContactsPage from '@/components/Contacts'
import NotFoundPage from '@/components/NotFound'
import 'semantic-ui-css/semantic.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/services',
      name: 'Service',
      component: ServicesPage
    },
    {
      path: '/goods',
      name: 'Goods',
      component: GoodsPage
    },
    {
      path: '/prices',
      name: 'Prices',
      component: PricesPage
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsPage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ]
})
