<template>
  <header ref="header" class="nav" :class="{ scrolled }">
    <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>
    <div class="container nav-inner">
      <RouterLink to="/" class="brand" aria-label="Ophélie Bellissens — accueil">
        <Logo />
        <span class="brand-name">Ophélie Bellissens</span>
      </RouterLink>

      <nav id="menu" class="links" :class="{ open }" aria-label="Navigation principale">
        <!-- `custom` : RouterLink impose sinon ses propres class et aria-current -->
        <RouterLink
          v-for="l in liens"
          :key="l.hash"
          v-slot="{ href, navigate }"
          :to="{ path: '/', hash: l.hash }"
          custom
        >
          <a
            :href="href"
            :class="{ active: actif === l.hash }"
            :aria-current="actif === l.hash ? 'location' : undefined"
            @click="suivreLien($event, navigate)"
          >
            {{ l.label }}
          </a>
        </RouterLink>
      </nav>

      <div class="actions">
        <button ref="themeBtn" class="icon-btn" type="button" :aria-label="dark ? 'Activer le thème clair' : 'Activer le thème sombre'" @click="toggleTheme">
          <Icon :name="dark ? 'sun' : 'moon'" />
        </button>
        <button ref="burger" class="icon-btn burger" type="button" aria-controls="menu" :aria-expanded="open" :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'" @click="open = !open">
          <Icon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import Logo from './Logo.vue'

const liens = [
  { hash: '#projets', label: 'Projets' },
  { hash: '#competences', label: 'Compétences' },
  { hash: '#parcours', label: 'Parcours' },
  { hash: '#contact', label: 'Contact' },
]

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const actif = ref('')
const header = ref(null)
const burger = ref(null)

function fermerMenu(rendreFocus = false) {
  if (!open.value) return
  open.value = false
  if (rendreFocus) burger.value?.focus()
}

// Lien de section : on referme le menu avant de laisser le routeur naviguer
function suivreLien(e, navigate) {
  open.value = false
  navigate(e)
}

// Échap ferme le menu et ramène le focus sur le bouton qui l'a ouvert
const onKeydown = (e) => {
  if (e.key === 'Escape') fermerMenu(true)
}

// Un clic hors de l'en-tête ferme le menu
const onPointerdown = (e) => {
  if (!header.value?.contains(e.target)) fermerMenu()
}

const dark = ref(document.documentElement.dataset.theme === 'dark')
const themeBtn = ref(null)
const moinsDAnimations = window.matchMedia('(prefers-reduced-motion: reduce)')

function appliquerTheme() {
  dark.value = !dark.value
  const theme = dark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* stockage indisponible : le thème reste valable pour la session */
  }
}

// Au clavier, le clic n'a pas de coordonnées : le cercle part alors du bouton
function origine(e) {
  if (e.detail > 0) return { x: e.clientX, y: e.clientY }
  const r = themeBtn.value.getBoundingClientRect()
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
}

// Le nouveau thème se déploie en cercle depuis le bouton.
// Sans View Transitions ou en animations réduites, on garde la bascule directe.
function toggleTheme(e) {
  if (!document.startViewTransition || moinsDAnimations.matches) return appliquerTheme()

  const { x, y } = origine(e)
  // Rayon nécessaire pour couvrir le coin le plus éloigné du point de départ
  const rayon = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  const racine = document.documentElement
  racine.classList.add('theme-switch')
  const transition = document.startViewTransition(appliquerTheme)

  transition.ready.then(() => {
    racine.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${rayon}px at ${x}px ${y}px)`] },
      { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
    )
  })

  transition.finished.finally(() => racine.classList.remove('theme-switch'))
}

const progress = ref(0)

// Section courante : la dernière dont le haut est passé sous l'en-tête
function sectionCourante() {
  const sections = liens
    .map((l) => [l.hash, document.getElementById(l.hash.slice(1))])
    .filter(([, el]) => el)
  // Hors de l'accueil il n'y a aucune section à suivre
  if (!sections.length) return ''

  // En bas de page, la dernière section est active même si elle est courte
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    return sections[sections.length - 1][0]
  }

  const ligne = window.scrollY + 120
  let trouve = ''
  for (const [hash, el] of sections) if (el.offsetTop <= ligne) trouve = hash
  return trouve
}

const onScroll = () => {
  scrolled.value = window.scrollY > 8
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
  actif.value = sectionCourante()
}

// Repasser en desktop referme le menu : son aria-expanded ne doit pas rester à true
const large = window.matchMedia('(min-width: 821px)')
const onLarge = (e) => e.matches && fermerMenu()

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('pointerdown', onPointerdown)
  large.addEventListener('change', onLarge)
})

// Le scroll ne se déclenche pas toujours au changement de route
watch(() => route.path, () => nextTick(onScroll))

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('pointerdown', onPointerdown)
  large.removeEventListener('change', onLarge)
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s, border-color 0.3s;
}

.progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--grad);
  transform-origin: left;
  transform: scaleX(0);
  box-shadow: 0 0 10px var(--accent);
}

.nav.scrolled {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
  border-color: var(--line);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: var(--nav-h);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  font-weight: 700;
}

.brand :deep(.logo) {
  transition: transform 0.5s var(--ease);
}

.brand:hover :deep(.logo) {
  transform: rotate(-8deg) scale(1.08);
}

@media (prefers-reduced-motion: reduce) {
  .brand:hover :deep(.logo) {
    transform: none;
  }
}

.links {
  display: flex;
  gap: 0.25rem;
}

.links a {
  position: relative;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--muted);
  transition: color 0.2s, background-color 0.2s;
}

.links a::after {
  content: '';
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.3rem;
  height: 2px;
  border-radius: 2px;
  background: var(--grad);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.35s var(--ease);
}

.links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.links a:hover,
.links a.active {
  color: var(--ink);
}

.links a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.actions {
  display: flex;
  gap: 0.4rem;
}

.icon-btn {
  display: grid;
  place-items: center;
  /* 44px : cible tactile recommandée sur iOS et Android */
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
}

.icon-btn:hover {
  border-color: var(--ink);
}

.icon-btn svg {
  width: 1.15rem;
  height: 1.15rem;
}

.burger {
  display: none;
}

@media (max-width: 820px) {
  .brand-name {
    display: none;
  }
  .burger {
    display: grid;
  }
  .links {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 1.25rem;
    right: 1.25rem;
    flex-direction: column;
    padding: 0.75rem;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow-hover);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.2s, transform 0.25s var(--ease), visibility 0.2s;
  }
  .links.open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
  .links a {
    padding: 0.85rem 1rem;
    font-size: 1.05rem;
    color: var(--ink);
  }
}
</style>
