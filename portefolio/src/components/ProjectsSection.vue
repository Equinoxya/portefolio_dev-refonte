<template>
  <section id="projets" class="section" aria-labelledby="projets-title">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Projets</p>
          <h2 id="projets-title" class="section-title">Travaux <em>récents</em></h2>
        </div>
        <p class="section-intro">
          Applications web, intégrations d'IA et site client : une sélection de mes derniers projets, code source à l'appui.
        </p>
      </div>

      <ul class="grid" data-stagger>
        <li v-for="p in projetsRecents" :key="p.nom" v-spot="{ tilt: true }" class="card">
          <div class="cover" :style="{ '--h': p.hue }" aria-hidden="true">
            <span class="cover-word">{{ p.cover }}</span>
            <span class="cover-label">{{ p.contexte }}</span>
          </div>
          <div class="body">
            <h3>{{ p.nom }}</h3>
            <p>{{ p.description }}</p>
            <ul class="tags" aria-label="Technologies">
              <li v-for="t in p.tags" :key="t">{{ t }}</li>
            </ul>
            <div class="links">
              <a v-if="p.site" :href="p.site" target="_blank" rel="noopener noreferrer" class="link link-strong">
                Voir le site <Icon name="arrow" /><span class="sr-only"> {{ p.nom }} (nouvel onglet)</span>
              </a>
              <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener noreferrer" class="link">
                <Icon name="github" /> Code source<span class="sr-only"> de {{ p.nom }} (nouvel onglet)</span>
              </a>
            </div>
          </div>
        </li>
      </ul>

      <h3 class="sub-title">Projets antérieurs</h3>
      <ul class="archive">
        <li v-for="p in projetsAnterieurs" :key="p.nom" class="archive-item">
          <img :src="p.image" :alt="`Aperçu du projet ${p.nom}`" width="800" height="450" loading="lazy" decoding="async" />
          <div class="archive-body">
            <h4>{{ p.nom }}</h4>
            <p>{{ p.description }}</p>
            <p class="archive-tags">{{ p.tags.join(' · ') }}</p>
          </div>
          <div class="archive-links">
            <a v-if="p.site" :href="p.site" target="_blank" rel="noopener noreferrer" :aria-label="`Voir le site ${p.nom} (nouvel onglet)`">
              Site <Icon name="arrow" />
            </a>
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener noreferrer" :aria-label="`Code source de ${p.nom} sur GitHub (nouvel onglet)`">
              Code <Icon name="arrow" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Icon from './Icon.vue'
import { projetsRecents, projetsAnterieurs } from '../data/projets.js'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr));
  gap: 1.5rem;
}

.card {
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  overflow: hidden;
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.35s, opacity 0.7s var(--ease);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
  border-color: transparent;
}

/* Couverture générée : pas d'image, un dégradé teinté par projet */
.cover {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 16 / 9;
  padding: 1.1rem 1.3rem;
  overflow: hidden;
  background:
    radial-gradient(120% 90% at 100% 0%, hsl(var(--h) 70% 82% / 0.9), transparent 60%),
    linear-gradient(135deg, hsl(var(--h) 45% 93%), hsl(calc(var(--h) + 40) 50% 88%));
  color: hsl(var(--h) 45% 24%);
  background-size: 140% 140%;
  background-position: 0% 0%;
  transition: background-position 1.2s var(--ease);
}

.card:hover .cover {
  background-position: 100% 100%;
}

/* Éclat lumineux qui traverse la couverture au survol */
.cover::before {
  content: '';
  position: absolute;
  inset: -50%;
  z-index: 1;
  background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.45) 50%, transparent 60%);
  transform: translateX(-60%);
  transition: transform 1s var(--ease);
  pointer-events: none;
}

.card:hover .cover::before {
  transform: translateX(60%);
}

:root[data-theme='dark'] .cover {
  background:
    radial-gradient(120% 90% at 100% 0%, hsl(var(--h) 45% 32% / 0.9), transparent 60%),
    linear-gradient(135deg, hsl(var(--h) 25% 17%), hsl(calc(var(--h) + 40) 25% 13%));
  color: hsl(var(--h) 70% 86%);
}

.cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 14px 14px;
  opacity: 0.12;
  mask-image: linear-gradient(to left, black, transparent 70%);
}

.cover-word {
  position: relative;
  z-index: 1;
  order: 2;
  align-self: flex-end;
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.03em;
  transition: transform 0.6s var(--ease);
}

.card:hover .cover-word {
  transform: translateX(-10px) scale(1.06);
}

.cover-label {
  position: relative;
  z-index: 1;
  align-self: flex-start;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--surface) 70%, transparent);
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 700;
}

.body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.4rem 1.5rem 1.5rem;
}

.body h3 {
  font-size: 1.5rem;
}

.body p {
  color: var(--muted);
  font-size: 0.975rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tags li {
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: var(--bg);
  border: 1px solid var(--line);
  font-size: 0.78rem;
  font-weight: 600;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  font-size: 0.925rem;
  text-decoration: none;
  color: var(--muted);
  transition: color 0.2s;
}

.link:hover,
.link-strong {
  color: var(--accent);
}

.link-strong:hover {
  color: var(--ink);
}

.link svg {
  width: 1rem;
  height: 1rem;
}

/* Archive */
.sub-title {
  margin: clamp(3.5rem, 7vw, 5rem) 0 1.25rem;
  font-size: 1.6rem;
}

.archive {
  border-top: 1px solid var(--line);
}

.archive-item {
  transition: padding 0.35s var(--ease), background-color 0.35s;
  display: grid;
  grid-template-columns: 112px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--line);
}

.archive-item:hover {
  padding-inline: 0.75rem;
  background: color-mix(in srgb, var(--surface) 70%, transparent);
}

.archive-item img {
  transition: transform 0.5s var(--ease);
  width: 112px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--line);
}

.archive-item:hover img {
  transform: scale(1.08) rotate(-2deg);
}

.archive-body h4 {
  font-size: 1.1rem;
  font-weight: 700;
}

.archive-body p {
  font-size: 0.95rem;
  color: var(--muted);
}

.archive-tags {
  margin-top: 0.15rem;
  font-size: 0.8rem !important;
  font-weight: 600;
}

.archive-links {
  display: flex;
  gap: 0.5rem;
}

.archive-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

.archive-links a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.archive-links svg {
  width: 0.9rem;
  height: 0.9rem;
}

@media (max-width: 640px) {
  .archive-item {
    grid-template-columns: 80px 1fr;
    gap: 1rem;
  }
  .archive-item img {
    width: 80px;
    height: 56px;
  }
  .archive-links {
    grid-column: 2;
  }
}
</style>
