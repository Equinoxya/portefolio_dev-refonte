<template>
  <section id="contact" class="section" aria-labelledby="contact-title">
    <div class="container">
      <div v-spot class="panel">
        <div class="left">
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title" class="section-title">Travaillons <em>ensemble</em></h2>
          <p class="lead">
            Un stage, une alternance, un projet ou simplement une question ? Écrivez-moi, je réponds rapidement.
          </p>
          <ul class="channels">
            <li>
              <a href="https://www.linkedin.com/in/ophelie-bellissens-dev/" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> linkedin.com/in/ophelie-bellissens-dev
              </a>
            </li>
            <li>
              <a href="https://github.com/Equinoxya" target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> github.com/Equinoxya
              </a>
            </li>
            <li>
              <a href="/cv-ophelie-bellissens.pdf" download>
                <Icon name="download" /> Télécharger mon CV<span class="sr-only"> (PDF, 333 Ko)</span>
              </a>
            </li>
          </ul>
        </div>

        <form class="form" novalidate @submit.prevent="envoyer">
          <div class="field">
            <label for="nom">Nom</label>
            <input id="nom" v-model.trim="form.nom" type="text" name="nom" autocomplete="name" maxlength="80" required :aria-invalid="!!erreurs.nom" aria-describedby="err-nom" />
            <p id="err-nom" class="err">{{ erreurs.nom }}</p>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model.trim="form.email" type="email" name="email" autocomplete="email" maxlength="120" required :aria-invalid="!!erreurs.email" aria-describedby="err-email" />
            <p id="err-email" class="err">{{ erreurs.email }}</p>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" v-model.trim="form.message" name="message" rows="5" maxlength="2000" required :aria-invalid="!!erreurs.message" aria-describedby="err-message"></textarea>
            <p id="err-message" class="err">{{ erreurs.message }}</p>
          </div>

          <!-- Piège anti-spam : invisible pour les humains, rempli par les robots -->
          <div class="hp" aria-hidden="true">
            <label for="site">Ne pas remplir</label>
            <input id="site" v-model="form.site" type="text" name="site" tabindex="-1" autocomplete="off" />
          </div>

          <button class="btn btn-primary" type="submit" :disabled="envoi">
            <Icon name="mail" />
            {{ envoi ? 'Envoi…' : 'Envoyer le message' }}
          </button>
          <p class="status" :class="statut.type" role="status" aria-live="polite">{{ statut.texte }}</p>
          <p class="rgpd">
            Vos données servent uniquement à vous répondre.
            <RouterLink to="/mentions-legales">En savoir plus</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import Icon from './Icon.vue'

const form = reactive({ nom: '', email: '', message: '', site: '' })
const erreurs = reactive({ nom: '', email: '', message: '' })
const statut = reactive({ type: '', texte: '' })
const envoi = ref(false)
let dernierEnvoi = 0

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function valider() {
  erreurs.nom = form.nom.length >= 2 ? '' : 'Indiquez votre nom.'
  erreurs.email = EMAIL_RE.test(form.email) ? '' : 'Adresse email invalide.'
  erreurs.message = form.message.length >= 10 ? '' : 'Votre message doit contenir au moins 10 caractères.'
  return !erreurs.nom && !erreurs.email && !erreurs.message
}

async function envoyer() {
  statut.type = ''
  statut.texte = ''

  // Robot détecté : on simule un succès sans rien envoyer
  if (form.site) {
    statut.type = 'ok'
    statut.texte = 'Merci, votre message a bien été envoyé.'
    return
  }
  if (!valider()) return

  if (Date.now() - dernierEnvoi < 30_000) {
    statut.type = 'ko'
    statut.texte = 'Merci de patienter quelques secondes avant un nouvel envoi.'
    return
  }

  envoi.value = true
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { from_name: form.nom, from_email: form.email, message: form.message },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
    )
    dernierEnvoi = Date.now()
    statut.type = 'ok'
    statut.texte = 'Merci, votre message a bien été envoyé. Je vous réponds rapidement.'
    form.nom = form.email = form.message = ''
  } catch {
    statut.type = 'ko'
    statut.texte = "L'envoi a échoué. Réessayez ou contactez-moi via LinkedIn."
  } finally {
    envoi.value = false
  }
}
</script>

<style scoped>
.panel {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(2rem, 5vw, 4rem);
  padding: clamp(1.75rem, 5vw, 3.5rem);
  border-radius: calc(var(--radius-lg) + 8px);
  background:
    radial-gradient(80% 60% at 0% 0%, var(--accent-soft), transparent 70%),
    radial-gradient(70% 60% at 100% 100%, var(--lilac-soft), transparent 70%),
    var(--surface);
  border: 1px solid var(--line);
}

.lead {
  margin-top: 1.25rem;
  max-width: 28rem;
  color: var(--muted);
  font-size: 1.1rem;
}

.channels {
  display: grid;
  gap: 0.75rem;
  margin-top: 2rem;
}

.channels a {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  text-decoration: none;
  word-break: break-word;
  transition: color 0.2s;
}

.channels a:hover {
  color: var(--accent);
}

.channels svg {
  flex-shrink: 0;
  width: 1.15rem;
  height: 1.15rem;
}

.form {
  display: grid;
  gap: 0.35rem;
}

.field {
  display: grid;
  gap: 0.35rem;
}

label {
  font-size: 0.875rem;
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1.5px solid var(--line);
  border-radius: 14px;
  background: var(--bg);
  transition: border-color 0.2s, box-shadow 0.2s;
}

textarea {
  resize: vertical;
  min-height: 9rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

input[aria-invalid='true'],
textarea[aria-invalid='true'] {
  border-color: var(--danger);
}

.err {
  min-height: 1.2rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--danger);
}

.hp {
  position: absolute;
  left: -9999px;
}

.btn {
  justify-self: start;
  margin-top: 0.4rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: wait;
  transform: none;
}

.status {
  min-height: 1.4rem;
  font-weight: 600;
  font-size: 0.925rem;
}

.status.ok {
  color: var(--success);
}

.status.ko {
  color: var(--danger);
}

.rgpd {
  font-size: 0.8rem;
  color: var(--muted);
}

@media (max-width: 820px) {
  .panel {
    grid-template-columns: 1fr;
  }
}
</style>
