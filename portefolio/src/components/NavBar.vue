<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <RouterLink to="/" class="brand" aria-label="Ophélie Bellissens — accueil">
        <span class="monogram">OB</span>
        <span class="brand-name">Ophélie Bellissens</span>
      </RouterLink>

      <nav id="menu" class="links" :class="{ open }" aria-label="Navigation principale">
        <RouterLink v-for="l in liens" :key="l.hash" :to="{ path: '/', hash: l.hash }" @click="open = false">
          {{ l.label }}
        </RouterLink>
      </nav>

      <div class="actions">
        <button class="icon-btn" type="button" :aria-label="dark ? 'Activer le thème clair' : 'Activer le thème sombre'" @click="toggleTheme">
          <Icon :name="dark ? 'sun' : 'moon'" />
        </button>
        <button class="icon-btn burger" type="button" aria-controls="menu" :aria-expanded="open" :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'" @click="open = !open">
          <Icon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Icon from './Icon.vue'

const liens = [
  { hash: '#projets', label: 'Projets' },
  { hash: '#competences', label: 'Compétences' },
  { hash: '#parcours', label: 'Parcours' },
  { hash: '#contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const dark = ref(document.documentElement.dataset.theme === 'dark')

function toggleTheme() {
  dark.value = !dark.value
  const theme = dark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* stockage indisponible : le thème reste valable pour la session */
  }
}

const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s, border-color 0.3s;
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
  height: 4.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  font-weight: 700;
}

.monogram {
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 12px;
  background: var(--ink);
  color: var(--bg);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
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

.links a:hover {
  color: var(--ink);
  background: var(--surface);
}

.actions {
  display: flex;
  gap: 0.4rem;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
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
