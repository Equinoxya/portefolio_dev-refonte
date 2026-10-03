# CV

Source du CV publié sur le portfolio (`portefolio/public/cv-ophelie-bellissens.pdf`).

Le CV est écrit en HTML pour rester modifiable et reprendre l'identité du site :
mêmes polices (Fraunces et Manrope) et même accent que `portefolio/src/assets/main.css`.

## Modifier

Éditer `cv.html`, puis régénérer le PDF :

```bash
node render.mjs
cp cv.pdf ../portefolio/public/cv-ophelie-bellissens.pdf
```

Les polices sont chargées depuis `portefolio/node_modules`, donc `npm install`
doit avoir été lancé dans `portefolio/` au préalable.

Le script vérifie que le contenu tient sur une page : il affiche la hauteur du
corps, à comparer aux 1123 px d'une A4 à 96 dpi. Au-delà, le PDF passe sur deux
pages — resserrer les espacements ou retirer un projet.
