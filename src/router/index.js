import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import TrappingRainWater from '../views/TrappingRainWater.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/trapping-rain-water',
      name: 'TrappingRainWater',
      // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrappingRainWater.vue')
    },
    {
      path: '/text-justification',
      name: 'TextJustification',
      component: () => import('../views/TextJustification.vue')
    },
    {
      path: '/the-skyline-problem',
      name: 'The Skyline Problem',
      component: () => import('../views/TheSkylineProblem.vue')
    }
  ]
})

export default router
