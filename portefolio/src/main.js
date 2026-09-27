import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/manrope'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Apparition douce des sections au scroll (désactivée si l'utilisateur réduit les animations)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
app.directive('appear', {
  mounted(el) {
    if (reduceMotion || !('IntersectionObserver' in window)) return
    el.classList.add('appear')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('appear-in')
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
  },
})

app.mount('#app')
