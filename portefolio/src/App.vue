<template>
  <div class="aurora" aria-hidden="true"><span></span><span></span><span></span></div>
  <a class="skip-link" href="#main">Aller au contenu</a>
  <NavBar />
  <!-- tabindex : sans lui, le lien d'évitement déplace la vue mais pas le focus clavier -->
  <main id="main" tabindex="-1">
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
