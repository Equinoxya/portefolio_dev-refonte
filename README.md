# Portfolio — Ophélie Bellissens

Portfolio de développeuse web et IA, en formation Concepteur Développeur Intégrateur IA à Metz Numeric School.

**Site en ligne : [opheliebellissens.netlify.app](https://opheliebellissens.netlify.app)**

## Contenu

- Présentation et liens (GitHub, LinkedIn)
- CV en téléchargement (`public/cv-ophelie-bellissens.pdf`)
- Projets récents avec liens vers le code source ou le site en ligne
- Compétences : IA et données, back-end, front-end, bases de données et DevOps
- Parcours : formations et stages
- Formulaire de contact (EmailJS)
- Thème clair / sombre

## Stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
- [EmailJS](https://www.emailjs.com/) pour l'envoi des messages
- Polices auto-hébergées : Fraunces et Manrope (Fontsource)
- Hébergement : Netlify

Aucun framework CSS : le design repose sur des variables CSS (couleurs, rayons, ombres) définies dans `src/assets/main.css`.

## Structure

```
portefolio/
├── public/
│   ├── images/          # Photos et aperçus au format WebP
│   └── _redirects       # Redirection SPA pour Netlify
├── src/
│   ├── assets/main.css  # Variables de thème et styles globaux
│   ├── components/      # Sections de la page (Hero, Projets, Compétences…)
│   ├── data/projets.js  # Liste des projets affichés
│   ├── router/          # Routes : accueil et mentions légales
│   ├── views/Home.vue
│   ├── App.vue
│   └── main.js
├── index.html           # Métadonnées SEO, Open Graph, JSON-LD
└── vite.config.js       # Génération du sitemap
```

## Installation

Prérequis : Node.js 20.19+ ou 22.12+.

```bash
cd portefolio
npm install
```

Copier `portefolio/.env.example` en `portefolio/.env` (non versionné) et renseigner les
trois valeurs depuis le tableau de bord EmailJS :

```bash
cp .env.example .env
```

## Commandes

| Commande          | Action                                  |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Serveur de développement                |
| `npm run build`   | Build de production dans `dist/`        |
| `npm run preview` | Prévisualisation du build en local      |

## Ajouter un projet

Les projets sont définis dans `src/data/projets.js` :

- `projetsRecents` : cartes mises en avant. La couverture est générée en CSS à partir de `cover` (mot affiché) et `hue` (teinte de 0 à 360).
- `projetsAnterieurs` : liste compacte avec une image d'aperçu dans `public/images/`.

Les champs `repo` et `site` sont facultatifs : chaque lien n'apparaît que s'il est renseigné.

## Déploiement (Netlify)

| Réglage           | Valeur            |
| ----------------- | ----------------- |
| Base directory    | `portefolio`      |
| Build command     | `npm run build`   |
| Publish directory | `portefolio/dist` |

Variables d'environnement à déclarer sur Netlify : les trois variables `VITE_EMAILJS_*`, ainsi que `SECRETS_SCAN_OMIT_KEYS` avec la liste de ces trois clés. Elles sont publiques par conception et intégrées au code client.

## Sécurité

- Formulaire de contact : validation des champs, limite de longueur, champ piège anti-robots et délai entre deux envois.
- Le fichier `.env` n'est pas versionné ; `.env.example` sert de modèle.
- Les clés `VITE_EMAILJS_*` sont publiques par conception : Vite les intègre au bundle client, elles ne sont donc
  pas un secret. La protection repose sur la restriction de domaine configurée dans le tableau de bord EmailJS.

## Auteure

**Ophélie Bellissens** — [GitHub](https://github.com/Equinoxya) · [LinkedIn](https://www.linkedin.com/in/ophelie-bellissens-dev/)

© 2026 Ophélie Bellissens. Tous droits réservés : le code est consultable, mais les contenus (textes, photos, visuels) ne sont pas réutilisables sans autorisation.
