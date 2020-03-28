import Vue from 'vue'
import Router from 'vue-router'

import AR from '@/components/AR'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/ar', component: AR },
  ]
})
