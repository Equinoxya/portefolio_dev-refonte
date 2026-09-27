<template>
  <footer class="footer">
    <div class="container inner">
      <p class="sign">Ophélie <em>Bellissens</em></p>
      <nav class="social" aria-label="Réseaux">
        <a href="https://github.com/Equinoxya" target="_blank" rel="noopener noreferrer" aria-label="GitHub (nouvel onglet)"><Icon name="github" /></a>
        <a href="https://www.linkedin.com/in/ophelie-bellissens-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (nouvel onglet)"><Icon name="linkedin" /></a>
      </nav>
      <p class="small">
        © {{ annee }} Ophélie Bellissens ·
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
      </p>
    </div>
  </footer>
</template>

<script setup>
import Icon from './Icon.vue'
const annee = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding-block: 2.5rem;
}

.inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
}

.sign {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
}

.sign em {
  font-weight: 400;
  color: var(--accent);
}

.social {
  display: flex;
  gap: 0.5rem;
}

.social a {
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  transition: border-color 0.2s, color 0.2s;
}

.social a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.social svg {
  width: 1.1rem;
  height: 1.1rem;
}

.small {
  font-size: 0.875rem;
  color: var(--muted);
}
</style>
