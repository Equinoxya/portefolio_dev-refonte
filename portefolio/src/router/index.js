import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/mentions-legales',
    component: () => import('../components/MentionsLegales.vue'),
    meta: { title: 'Mentions légales — Ophélie Bellissens' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Ophélie Bellissens — Développeuse IA & web'
})

export default router
