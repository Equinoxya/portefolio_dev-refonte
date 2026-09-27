<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="status">
          <span class="dot" aria-hidden="true"></span>
          Conceptrice développeuse intégratrice IA · Metz Numeric School
        </p>

        <h1 id="hero-title">
          Ophélie Bellissens<span class="sep" aria-hidden="true">,</span>
          <span class="role">développeuse <em>web &amp; IA</em></span>
        </h1>

        <p class="bio">
          Je conçois des applications web et j'intègre de l'IA là où elle apporte quelque chose :
          modèles de machine learning, LLM en local, interfaces soignées. Illustratrice à côté,
          j'accorde autant d'importance au rendu qu'au code.
        </p>

        <div class="cta">
          <RouterLink :to="{ path: '/', hash: '#projets' }" class="btn btn-primary">
            Voir mes projets
            <Icon name="down" />
          </RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn btn-ghost">Me contacter</RouterLink>
        </div>

        <ul class="meta">
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
  </section>
</template>

<script setup>
import Icon from './Icon.vue'
</script>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(2.5rem, 7vw, 6rem) clamp(3.5rem, 8vw, 6.5rem);
  overflow: hidden;
}

.hero-grid {
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

.dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: #3fa36b;
  box-shadow: 0 0 0 4px color-mix(in srgb, #3fa36b 22%, transparent);
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
  color: var(--accent);
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
}

.blob {
  position: absolute;
  inset: 8% -10% -6% 12%;
  border-radius: 999px 999px 40px 40px;
  background: linear-gradient(160deg, var(--lilac-soft), var(--sky-soft) 55%, var(--accent-soft));
  transform: rotate(6deg);
}

.tag {
  position: absolute;
  z-index: 2;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: var(--surface);
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
