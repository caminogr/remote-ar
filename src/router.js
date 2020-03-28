import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import AR from '@/components/AR'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/ar', component: AR },
  ]
})
