<template>
  <a class="skip-link" href="#main">Aller au contenu</a>
  <NavBar />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/Footer.vue'
</script>

<style>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 100;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: var(--ink);
  color: var(--bg);
  font-weight: 700;
  text-decoration: none;
}
.skip-link:focus {
  top: 1rem;
}
</style>
