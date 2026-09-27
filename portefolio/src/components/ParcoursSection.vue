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
    org: 'Exocoms Group',
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
  background: linear-gradient(var(--accent), var(--lilac), var(--line));
  border-radius: 2px;
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
}

.marker.stage {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 0 5px var(--accent-soft);
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
