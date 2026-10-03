<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="status rise" style="--d: 0">
          <span class="dot" aria-hidden="true"></span>
          Conceptrice développeuse intégratrice IA · Metz Numeric School
        </p>

        <h1 id="hero-title" class="reveal">
          <span class="w" style="--d: 0">Ophélie</span>
          <span class="w" style="--d: 1">Bellissens<span class="sep" aria-hidden="true">,</span></span>
          <span class="role">
            <span class="w" style="--d: 2">développeuse</span>
            <em class="w grad-text" style="--d: 3">web &amp; IA</em>
          </span>
        </h1>

        <p class="bio rise" style="--d: 4">
          Je conçois des applications web et j'intègre de l'IA là où elle apporte quelque chose :
          modèles de machine learning, LLM en local, interfaces soignées. Illustratrice à côté,
          j'accorde autant d'importance au rendu qu'au code.
        </p>

        <div class="cta rise" style="--d: 5">
          <RouterLink :to="{ path: '/', hash: '#projets' }" class="btn btn-primary">
            Voir mes projets
            <Icon name="down" />
          </RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn btn-ghost">Me contacter</RouterLink>
          <a class="btn btn-ghost" href="/cv-ophelie-bellissens.pdf" download>
            <Icon name="download" /> Mon CV<span class="sr-only"> (PDF, 443 Ko)</span>
          </a>
        </div>

        <ul class="meta rise" style="--d: 6">
          <li><Icon name="pin" /> Thionville · Metz</li>
          <li>
            <a href="https://github.com/Equinoxya" target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ophelie-bellissens-dev/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn</a>
          </li>
        </ul>
      </div>

      <figure class="portrait">
        <div class="blob" aria-hidden="true"></div>
        <div class="ring" aria-hidden="true"></div>
        <div class="frame">
          <img
            src="/images/ophelie-480.webp"
            srcset="/images/ophelie-480.webp 480w, /images/ophelie-960.webp 960w"
            sizes="(max-width: 820px) 70vw, 420px"
            width="480"
            height="600"
            alt="Portrait d'Ophélie Bellissens"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <figcaption class="tag tag-a">Python · Vue.js</figcaption>
        <figcaption class="tag tag-b">Machine Learning</figcaption>
      </figure>
    </div>

    <div class="marquee" aria-hidden="true">
      <div class="track">
        <template v-for="n in 2" :key="n">
          <span v-for="t in stack" :key="t + n">{{ t }}<i>✦</i></span>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from './Icon.vue'

const stack = ['Python', 'Vue.js', 'Django', 'Machine Learning', 'TensorFlow', 'LLM locaux', 'React', 'PostgreSQL', 'Docker', 'Accessibilité', 'SEO']
</script>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(2.5rem, 7vw, 6rem) 0;
  overflow: hidden;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(2.5rem, 6vw, 5rem);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.9rem 0.4rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--muted);
}

.status {
  backdrop-filter: blur(8px);
  background: color-mix(in srgb, var(--surface) 70%, transparent);
}

.dot {
  position: relative;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: #3fa36b;
}

.dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #3fa36b;
  animation: ping 2s var(--ease) infinite;
}

@keyframes ping {
  80%,
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Apparition du titre, mot par mot */
.reveal .w {
  display: inline-block;
  animation: word-in 1s var(--ease) both;
  animation-delay: calc(var(--d) * 110ms + 150ms);
}

.rise {
  animation: rise-in 0.9s var(--ease) both;
  animation-delay: calc(var(--d) * 110ms + 150ms);
}

@keyframes word-in {
  from {
    opacity: 0;
    transform: translateY(0.6em) rotate(4deg);
    filter: blur(10px);
  }
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
}

h1 {
  margin-top: 1.5rem;
  font-size: clamp(2.6rem, 6.6vw, 5rem);
  font-weight: 600;
}

.sep {
  color: var(--accent);
}

.role {
  display: block;
  margin-top: 0.35rem;
  font-weight: 400;
  color: var(--muted);
}

.role em {
  font-style: italic;
}

.bio {
  max-width: 36rem;
  margin-top: 1.5rem;
  font-size: 1.125rem;
  color: var(--muted);
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-top: 2.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--muted);
}

.meta li,
.meta a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.meta a {
  text-decoration: none;
  transition: color 0.2s;
}

.meta a:hover {
  color: var(--ink);
}

.meta svg {
  width: 1.05rem;
  height: 1.05rem;
}

/* Portrait */
.portrait {
  position: relative;
  justify-self: center;
  width: min(100%, 420px);
}

.portrait {
  animation: rise-in 1.2s var(--ease) 0.3s both;
}

/* Anneau dégradé qui tourne autour du portrait */
.ring {
  position: absolute;
  inset: -10px;
  z-index: 0;
  border-radius: 999px 999px calc(var(--radius-lg) + 10px) calc(var(--radius-lg) + 10px);
  background: conic-gradient(from var(--angle), var(--accent), var(--lilac), #7fb6dc, var(--accent));
  animation: spin 7s linear infinite;
  filter: blur(0.5px);
}

.ring::after {
  content: '';
  position: absolute;
  inset: 12%;
  z-index: -1;
  border-radius: inherit;
  background: inherit;
  filter: blur(40px);
  opacity: 0.7;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin {
  to {
    --angle: 360deg;
  }
}

.frame {
  position: relative;
  z-index: 1;
  aspect-ratio: 4 / 5;
  border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
  overflow: hidden;
  border: 6px solid var(--surface);
  box-shadow: var(--shadow-hover);
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--ease);
}

.portrait:hover .frame img {
  transform: scale(1.05);
}

.blob {
  position: absolute;
  inset: 8% -10% -6% 12%;
  border-radius: 999px 999px 40px 40px;
  background: linear-gradient(160deg, var(--lilac-soft), var(--sky-soft) 55%, var(--accent-soft));
  transform: rotate(6deg);
  animation: sway 9s ease-in-out infinite;
}

@keyframes sway {
  50% {
    transform: rotate(-3deg) translate(-4%, 3%);
  }
}

.tag {
  position: absolute;
  z-index: 2;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--surface) 75%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
  box-shadow: var(--shadow);
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  animation: float 6s ease-in-out infinite;
}

.tag-a {
  top: 18%;
  left: -12%;
}

.tag-b {
  bottom: 12%;
  right: -8%;
  background: var(--ink);
  color: var(--bg);
  animation-delay: -3s;
}

@keyframes float {
  50% {
    transform: translateY(-8px);
  }
}

/* Bandeau défilant des technos */
.marquee {
  margin-top: clamp(3rem, 7vw, 5rem);
  padding-block: 1.1rem;
  border-block: 1px solid var(--line);
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.track {
  display: flex;
  width: max-content;
  animation: scroll-x 40s linear infinite;
}

.marquee:hover .track {
  animation-play-state: paused;
}

.track span {
  display: inline-flex;
  align-items: center;
  gap: 1.75rem;
  padding-right: 1.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-style: italic;
  white-space: nowrap;
  color: var(--muted);
}

.track i {
  font-style: normal;
  font-size: 0.7em;
  color: var(--accent);
}

@keyframes scroll-x {
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 820px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .portrait {
    order: -1;
    width: min(72%, 320px);
  }
  .tag-a {
    left: -18%;
  }
  .tag-b {
    right: -14%;
  }
}
</style>
