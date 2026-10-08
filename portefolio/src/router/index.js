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

// Le routeur calcule lui-même la position : il ignore le scroll-padding-top du CSS.
// On relit donc la même valeur pour garder une seule source de vérité (--nav-h).
function decalageNav() {
  const v = getComputedStyle(document.documentElement).scrollPaddingTop
  return parseFloat(v) || 84
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: decalageNav(), behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Ophélie Bellissens — Développeuse IA & web'
})

export default router
