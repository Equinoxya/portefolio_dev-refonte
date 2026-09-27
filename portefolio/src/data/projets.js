const GH = 'https://github.com/Equinoxya'

// Projets récents mis en avant. `hue` sert à générer la couverture (pas d'image à charger).
export const projetsRecents = [
  {
    nom: 'HelpMeDraft',
    cover: 'Draft',
    hue: 18,
    contexte: 'Projet fil rouge · 2026',
    description:
      "Application de rédaction assistée par IA pour les documents professionnels : éditeur Markdown, reformulation, correction et complétion du texte, gestion des comptes et des rôles.",
    tags: ['Vue.js', 'API REST', 'IA générative', 'RGPD'],
    repo: `${GH}/HelpMeDraft---projet-fil-rouge`,
  },
  {
    nom: 'Hyrule Quest Board',
    cover: 'Quest',
    hue: 150,
    contexte: 'Django · IA locale',
    description:
      "Tableau de quêtes avec statistiques calculées par l'ORM et un chatbot 100 % local (Ollama), cadré pour ne répondre que sur l'univers de Zelda.",
    tags: ['Python', 'Django', 'Ollama', 'LLM'],
    repo: `${GH}/Hyrule-Quest-Board`,
  },
  {
    nom: 'SentinelBot',
    cover: 'Sentinel',
    hue: 265,
    contexte: 'Machine Learning · Twitch',
    description:
      'Bot de modération Twitch : un modèle de ML détecte toxicité et spam en temps réel, puis un LLM local génère la réponse envoyée au bannissement.',
    tags: ['Python', 'Machine Learning', 'TwitchIO', 'Ollama'],
    repo: `${GH}/Sent_iNel_Bot_simulate`,
  },
  {
    nom: 'Préface Bijoux',
    cover: 'Préface',
    hue: 340,
    contexte: 'Stage · en ligne',
    description:
      "Site vitrine d'une bijouterie-atelier à Metz : intégration responsive, SEO local (JSON-LD, Open Graph), accessibilité et prise de rendez-vous en ligne.",
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO local'],
    site: 'https://www.prefacebijoux.com',
  },
  {
    nom: 'Brickmarket',
    cover: 'Brick',
    hue: 45,
    contexte: 'E-commerce · Django',
    description:
      "Boutique en ligne de briques de construction : catalogue, fiches produit, panier, design system CSS et déploiement Docker via GitHub Actions.",
    tags: ['Django', 'Python', 'CSS', 'Docker'],
    repo: `${GH}/Brickmarket`,
  },
  {
    nom: 'Pierre · Feuille · Ciseaux',
    cover: 'Vision',
    hue: 205,
    contexte: 'Computer vision',
    description:
      "Classification d'images par transfer learning (MobileNetV2, ~94 % de précision), jeu en direct à la webcam avec OpenCV et interface Streamlit avec Grad-CAM.",
    tags: ['TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
    repo: `${GH}/PierreFeuilleCiseaux`,
  },
]

export const projetsAnterieurs = [
  {
    nom: 'Game Recommender',
    description: 'Recommandation de catégories de jeux vidéo par un modèle de ML.',
    tags: ['Python', 'ML', 'JavaScript'],
    image: '/images/GameRecommander.webp',
    site: 'https://gamesrecommender.netlify.app/',
    repo: `${GH}/GameRecommender`,
  },
  {
    nom: 'Equipouet',
    description: "Portfolio d'illustratrice.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/Equipouet.webp',
    site: 'https://equipouet.netlify.app/',
  },
  {
    nom: 'Nina Carducci',
    description: "Optimisation SEO et performances d'un portfolio de photographe.",
    tags: ['JavaScript', 'SEO', 'Lighthouse'],
    image: '/images/Nina.webp',
    site: 'https://equinoxya.github.io/OPP5-Nina/',
    repo: `${GH}/OPP5-Nina`,
  },
  {
    nom: 'Booki',
    description: "Intégration responsive d'une plateforme de réservation touristique.",
    tags: ['HTML', 'CSS'],
    image: '/images/Booki.webp',
    site: 'https://equinoxya.github.io/Booki/',
    repo: `${GH}/Booki`,
  },
  {
    nom: 'Gestionnaire de bornes d’arcade',
    description: 'Application Python avec ORM et opérations CRUD.',
    tags: ['Python', 'ORM', 'CRUD'],
    image: '/images/Arcade.webp',
    repo: `${GH}/TP-Arcade`,
  },
]
