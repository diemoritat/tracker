import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import AddNew from './views/AddNew.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cobranças',
      component: List
    },
    {
      path: '/new',
      name: 'Nova Cobrança',
      component: AddNew
    }
  ]
})
