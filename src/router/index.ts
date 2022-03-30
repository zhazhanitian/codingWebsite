import { createRouter as createVueRouter, createWebHashHistory, Router } from 'vue-router'
import { createAuthGuard } from '@auth0/auth0-vue'
import { App } from 'vue'

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: '/',
        alias: '/index',
        name: 'home',
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue'),
        beforeEnter: createAuthGuard(app)
      }
    ],
    history: createWebHashHistory()
  })
}

export default {}
