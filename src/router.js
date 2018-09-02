import Vue from 'vue'
import Router from 'vue-router'
import Slider from './views/Slider.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slider',
      component: Slider
    },
    {
      path: '/controller',
      name: 'controller',
      component: () => import('./views/Controller.vue')
    }
  ]
})
