import Vue from 'vue'
import Router from 'vue-router'
import PageList from './views/PageList'
import PageNew from './views/PageNew'

Vue.use(Router)

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
