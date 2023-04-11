import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/space',
    name: 'space',
    component: () => import('../pages/SpacePage.vue')
  },
  { path: '/:pathMatch(.*)', component: () => import('../pages/SpacePage.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
