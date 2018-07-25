import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import PageList from './views/PageList'
import PageNew from './views/PageNew'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cobranças',
      component: PageList
    },
    {
      path: '/new',
      name: 'Nova Cobrança',
      component: PageNew
    }
  ]
})
