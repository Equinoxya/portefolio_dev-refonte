<template>
  <section id="parcours" class="section" aria-labelledby="parcours-title">
    <div class="container layout">
      <div class="intro">
        <p class="eyebrow">Parcours</p>
        <h2 id="parcours-title" class="section-title">Formations <em>&amp; stages</em></h2>
        <p class="section-intro">
          Deux titres RNCP pour passer de l'intégration web à la conception d'applications intégrant de l'IA.
        </p>
      </div>

      <ol class="timeline">
        <li v-for="e in etapes" :key="e.titre" class="step">
          <span class="marker" :class="e.type" aria-hidden="true"></span>
          <p class="date">{{ e.date }} <span class="type">· {{ e.type === 'stage' ? 'Stage' : 'Formation' }}</span></p>
          <h3>{{ e.titre }}</h3>
          <p class="org">{{ e.org }}</p>
          <a v-if="e.lien" :href="e.lien" class="site" target="_blank" rel="noopener noreferrer">Voir le site<span class="sr-only"> (nouvel onglet)</span> ↗</a>
          <p v-if="e.description" class="desc">{{ e.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const etapes = [
  {
    type: 'stage',
    date: 'Sept. – oct. 2026',
    titre: 'Stage développeuse web',
    org: 'Préface Bijoux — bijouterie et atelier, Metz',
    description:
      "Conception et mise en ligne du site vitrine de la boutique : intégration HTML/CSS responsive, référencement local (JSON-LD, Open Graph, balises canoniques), accessibilité, intégration des avis Google, de la prise de rendez-vous en ligne et de Google Analytics. Création de la page Facebook de la boutique.",
    lien: 'https://www.prefacebijoux.com',
  },
  {
    type: 'formation',
    date: '2026 – en cours',
    titre: 'Titre RNCP Concepteur Développeur Intégrateur IA',
    org: 'Metz Numeric School',
    description:
      "Applications sécurisées en architecture multicouche, bases de données SQL et NoSQL, intégration de modèles d'IA, déploiement en démarche Agile et DevOps.",
  },
  {
    type: 'formation',
    date: '2022 – 2023',
    titre: 'Titre RNCP Développeur Web',
    org: 'OpenClassrooms',
    description: "Interfaces utilisateur, architecture applicative, référencement et optimisation des performances.",
  },
]
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.intro {
  position: sticky;
  top: 6rem;
}

.intro .section-intro {
  margin-top: 1.25rem;
}

.timeline {
  list-style: none;
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.4rem;
  top: 0.6rem;
  bottom: 0.6rem;
  width: 2px;
  background: var(--line);
  border-radius: 2px;
}

/* La ligne se remplit au fil du défilement (navigateurs compatibles) */
.timeline::after {
  content: '';
  position: absolute;
  left: 0.4rem;
  top: 0.6rem;
  bottom: 0.6rem;
  width: 2px;
  background: linear-gradient(var(--accent), var(--lilac));
  border-radius: 2px;
  box-shadow: 0 0 12px var(--accent);
  transform-origin: top;
}

@supports (animation-timeline: view()) {
  .timeline::after {
    animation: fill-line linear both;
    animation-timeline: view();
    animation-range: entry 20% cover 60%;
  }
}

@keyframes fill-line {
  from {
    transform: scaleY(0);
  }
}

.step {
  position: relative;
  padding: 0 0 2.5rem 1rem;
}

.step:last-child {
  padding-bottom: 0;
}

.marker {
  position: absolute;
  left: -2rem;
  top: 0.35rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--lilac);
  z-index: 1;
  transition: transform 0.3s var(--ease);
}

.step:hover .marker {
  transform: scale(1.35);
}

.marker.stage {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 0 5px var(--accent-soft);
  animation: pulse 2.4s ease-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 45%, transparent);
  }
  100% {
    box-shadow: 0 0 0 14px transparent;
  }
}

.date {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
}

.type {
  color: var(--muted);
  font-weight: 600;
}

.step h3 {
  margin-top: 0.35rem;
  font-size: clamp(1.3rem, 2.4vw, 1.6rem);
}

.org {
  margin-top: 0.2rem;
  font-weight: 600;
}

.site {
  display: inline-block;
  margin-top: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
}

.site:hover {
  text-decoration: underline;
}

.desc {
  margin-top: 0.6rem;
  max-width: 36rem;
  color: var(--muted);
  font-size: 0.975rem;
}

@media (max-width: 820px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .intro {
    position: static;
  }
}
</style>
