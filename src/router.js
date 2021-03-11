import vue from 'vue'
import Router from 'vue-router'

vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      component: () => import('./views/form.vue')
    },
    {
      path: '/checkbox',
      component: () => import('./views/checkbox.vue')
    },
    {
      path: '/display',
      component: () => import('./views/display.vue')
    },
    {
      path: '/alert',
      component: () => import('./views/alert.vue')
    },
    {
      path: '/table-render',
      component: () => import('./views/table-render.vue')
    },
    {
      path: '/table-slot',
      component: () => import('./views/table-slot.vue')
    },
    {
      path: '/tree',
      component: () => import('./views/tree.vue')
    },
    {
      path: '/input-number',
      component: () => import('./views/input-number.vue')
    },
    {
      path: '/tabs',
      component: () => import('./views/tabs.vue')
    },
    {
      path: '/',
      component: () => import('./views/index.vue')
    }
  ]
})