<template>
  <section class="section">
    <div class="container legal">
      <p class="eyebrow">Informations</p>
      <h1 class="section-title">Mentions <em>légales</em></h1>

      <h2>Éditrice du site</h2>
      <p>Ophélie Bellissens — Thionville, France</p>
      <p><a href="mailto:obellissens@gmail.com">obellissens@gmail.com</a></p>

      <h2>Hébergement</h2>
      <p>
        Netlify, Inc. — San Francisco, États-Unis —
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, images, projets) est la propriété de son autrice, sauf mention
        contraire. Toute reproduction sans autorisation est interdite.
      </p>

      <h2>Données personnelles (RGPD)</h2>
      <p>
        Le formulaire de contact collecte votre nom, votre adresse email et votre message dans le seul but de répondre
        à votre demande. Ces données ne sont pas stockées sur ce site ; elles transitent par le service EmailJS pour
        l'acheminement du message et ne sont transmises à aucun autre tiers.
      </p>
      <p>
        Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à l'adresse
        ci-dessus.
      </p>

      <h2>Cookies</h2>
      <p>Ce site n'utilise aucun cookie de suivi.</p>

      <RouterLink to="/" class="btn btn-ghost back">← Retour à l'accueil</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.legal {
  max-width: 46rem;
}

h2 {
  margin: 2.25rem 0 0.6rem;
  font-size: 1.4rem;
}

p {
  color: var(--muted);
}

p + p {
  margin-top: 0.5rem;
}

a {
  color: var(--accent);
}

.back {
  margin-top: 3rem;
  color: var(--ink);
}
</style>
