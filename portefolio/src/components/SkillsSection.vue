<template>
  <section id="competences" class="section band" aria-labelledby="competences-title">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Compétences</p>
          <h2 id="competences-title" class="section-title">Ma <em>boîte à outils</em></h2>
        </div>
        <p class="section-intro">Du modèle de données à l'interface, avec une spécialisation en intelligence artificielle.</p>
      </div>

      <div class="groups" data-stagger>
        <article v-for="g in groupes" :key="g.titre" v-spot class="group">
          <span class="num" aria-hidden="true">{{ g.num }}</span>
          <h3>{{ g.titre }}</h3>
          <p>{{ g.texte }}</p>
          <ul>
            <li v-for="s in g.outils" :key="s">{{ s }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const groupes = [
  {
    num: '01',
    titre: 'IA & données',
    texte: 'Classification, NLP, vision par ordinateur et LLM exécutés en local.',
    outils: ['Python', 'scikit-learn', 'TensorFlow / Keras', 'Pandas', 'OpenCV', 'Ollama', 'Streamlit'],
  },
  {
    num: '02',
    titre: 'Back-end',
    texte: 'API REST, ORM et architecture en couches.',
    outils: ['Django', 'Flask', 'SQLAlchemy', 'Node.js', 'API REST'],
  },
  {
    num: '03',
    titre: 'Front-end',
    texte: 'Interfaces responsives, accessibles et rapides.',
    outils: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind'],
  },
  {
    num: '04',
    titre: 'Bases & DevOps',
    texte: 'Modélisation, versionnement et déploiement.',
    outils: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git / GitHub', 'Docker', 'GitHub Actions'],
  },
]
</script>

<style scoped>
.band {
  background: color-mix(in srgb, var(--surface) 65%, transparent);
  backdrop-filter: blur(6px);
  border-block: 1px solid var(--line);
}

.groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1.25rem;
}

.group {
  position: relative;
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--bg);
  transition: border-color 0.3s, transform 0.35s var(--ease), box-shadow 0.35s, opacity 0.7s var(--ease);
}

.group:hover {
  border-color: transparent;
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

.num {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 2.6rem;
  line-height: 1;
  background: var(--grad);
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 1s var(--ease);
}

.group:hover .num {
  background-position: -100% 0;
}

.group h3 {
  margin-top: 0.75rem;
  font-size: 1.45rem;
}

.group p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: var(--muted);
}

.group:hover li {
  border-color: color-mix(in srgb, var(--accent) 35%, var(--line));
}

.group ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.25rem;
}

.group li {
  transition: border-color 0.2s, color 0.2s;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--line);
  font-size: 0.82rem;
  font-weight: 600;
}
</style>
