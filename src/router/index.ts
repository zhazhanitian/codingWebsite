import { createRouter as createVueRouter, createWebHistory, Router } from 'vue-router'
import { createAuthGuard } from '@auth0/auth0-vue'
import { App } from 'vue'
import Layout from '@/components/layout/index.vue'

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: '/',
        alias: '/index',
        name: 'Index',
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/environment',
        name: 'Environment',
        component: Layout,
        beforeEnter: createAuthGuard(app),
        children: [
          {
            path: '/environment/index',
            name: 'EnvironmentIndex',
            component: () => import('@/views/environment/index/index.vue')
          }
        ]
      },
      {
        path: '/team',
        name: 'Team',
        component: Layout,
        beforeEnter: createAuthGuard(app),
        children: [
          {
            path: '/team/index',
            name: 'TeamIndex',
            component: () => import('@/views/team/index/index.vue')
          }
        ]
      },
      {
        path: '/myAccount',
        name: 'MyAccount',
        component: Layout,
        beforeEnter: createAuthGuard(app),
        children: [
          {
            path: '/myAccount/index',
            name: 'MyAccountIndex',
            component: () => import('@/views/myAccount/index/index.vue')
          }
        ]
      },
      {
        path: '/billing',
        name: 'Billing',
        component: Layout,
        beforeEnter: createAuthGuard(app),
        children: [
          {
            path: '/billing/index',
            name: 'BillingIndex',
            component: () => import('@/views/billing/index/index.vue')
          }
        ]
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue'),
        beforeEnter: createAuthGuard(app)
      }
    ],
    history: createWebHistory()
  })
}

export default {}
