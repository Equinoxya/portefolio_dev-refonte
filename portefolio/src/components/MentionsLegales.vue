<template>
  <section class="section">
    <div class="container legal">
      <p class="eyebrow">Informations</p>
      <h1 class="section-title">Mentions <em>légales</em></h1>

      <h2>Éditrice du site</h2>
      <p>Ophélie Bellissens — Thionville, France</p>
      <p><a href="mailto:obellissens@gmail.com">obellissens@gmail.com</a></p>
      <p>Site personnel à vocation professionnelle, sans activité commerciale et non immatriculé au RCS.</p>

      <h2>Directrice de la publication</h2>
      <p>Ophélie Bellissens</p>

      <h2>Hébergement</h2>
      <p>
        Netlify, Inc. — 101 2nd Street, San Francisco, CA 94105-2239, États-Unis<br />
        <a href="mailto:support@netlify.com">support@netlify.com</a> —
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify.com</a>
      </p>
      <p>Netlify ne publie pas de numéro de téléphone : son support est assuré par courriel.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, images, projets) est la propriété de son autrice, sauf mention
        contraire. Toute reproduction sans autorisation est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        <strong>Responsable du traitement :</strong> Ophélie Bellissens,
        <a href="mailto:obellissens@gmail.com">obellissens@gmail.com</a>.
      </p>
      <p>
        <strong>Données collectées :</strong> le formulaire de contact recueille votre nom, votre adresse email et le
        contenu de votre message.
      </p>
      <p><strong>Finalité :</strong> répondre à votre demande, et uniquement celle-ci.</p>
      <p>
        <strong>Base légale :</strong> votre consentement, donné au moment de l'envoi du formulaire. Vous pouvez le
        retirer à tout moment.
      </p>
      <p>
        <strong>Destinataires :</strong> les messages ne sont pas enregistrés sur ce site. Ils transitent par le
        service
        <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">EmailJS</a>,
        qui assure leur acheminement vers ma boîte mail, et ne sont communiqués à aucun autre tiers.
      </p>
      <p>
        <strong>Transfert hors Union européenne :</strong> EmailJS et Netlify sont établis aux États-Unis. Vos données
        sont donc transférées hors de l'Union européenne, dans le cadre du Data Privacy Framework entre l'Union
        européenne et les États-Unis.
      </p>
      <p>
        <strong>Durée de conservation :</strong> les messages reçus sont conservés douze mois après notre dernier
        échange, puis supprimés.
      </p>
      <p>
        <strong>Vos droits :</strong> vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation
        et d'opposition au traitement, ainsi que d'un droit à la portabilité de vos données. Pour les exercer, écrivez
        à <a href="mailto:obellissens@gmail.com">obellissens@gmail.com</a>.
      </p>
      <p>
        Si la réponse apportée ne vous satisfait pas, vous pouvez introduire une réclamation auprès de la
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
      </p>

      <h2>Cookies et stockage local</h2>
      <p>
        Ce site ne dépose aucun cookie et n'utilise ni mesure d'audience ni traceur publicitaire. Votre choix de thème
        clair ou sombre est conservé dans le stockage local de votre navigateur, afin de le retrouver à votre
        prochaine visite. Cette donnée reste sur votre appareil, ne m'est jamais transmise, et n'est pas soumise à
        consentement puisqu'elle sert une préférence que vous avez vous-même exprimée.
      </p>
      <p>Les polices de caractères sont hébergées sur ce site : leur affichage ne transmet votre adresse IP à aucun tiers.</p>

      <p class="maj">Dernière mise à jour : 27 septembre 2026</p>

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

strong {
  color: var(--ink);
  font-weight: 700;
}

a {
  color: var(--accent);
}

.maj {
  margin-top: 2.5rem;
  font-size: 0.9rem;
  font-style: italic;
}

.back {
  margin-top: 1.5rem;
  color: var(--ink);
}
</style>
