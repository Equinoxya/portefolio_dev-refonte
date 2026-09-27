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
    el.querySelectorAll('[data-stagger]').forEach((list) =>
      [...list.children].forEach((child, i) => child.style.setProperty('--i', i)),
    )
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

// Halo qui suit la souris + légère inclinaison 3D (souris uniquement)
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
app.directive('spot', {
  mounted(el, { value }) {
    el.classList.add('spot')
    if (!finePointer) return
    const tilt = value?.tilt && !reduceMotion
    let frame = 0
    el.addEventListener('pointermove', (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        el.style.setProperty('--mx', `${x * 100}%`)
        el.style.setProperty('--my', `${y * 100}%`)
        if (tilt) el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-6px)`
      })
    })
    if (tilt)
      el.addEventListener('pointerleave', () => {
        cancelAnimationFrame(frame)
        el.style.transform = ''
      })
  },
})

app.mount('#app')
