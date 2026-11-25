# Portfolio — Sam Kabangu

Portfolio personnel construit avec React + Vite.

## Démarrer le projet

1. Installer Node.js (version LTS recommandée).
2. Décompresser le dossier.
3. Ouvrir un terminal dans ce dossier.
4. Exécuter :

```bash
npm install
npm run dev
```

5. Ouvrir l'adresse locale affichée par Vite (généralement http://localhost:5173).

## Construire la version de production

```bash
npm run build
npm run preview
```

Le dossier `dist/` contiendra le site prêt à être déployé.

## Personnalisation indispensable avant publication

Ouvrir `src/data.js` et remplacer :
- `email` par ton adresse e-mail professionnelle ;
- `phone` par ton numéro ;
- `whatsapp` par ton numéro au format international, sans `+` ni espaces ;
- `github` et `linkedin` par tes vrais profils.

Le contenu des compétences, projets et parcours se modifie également dans ce fichier.

## Ajouter une photo et un CV

- Place ta photo professionnelle dans `public/` et ajoute-la au composant `src/App.jsx` si tu souhaites remplacer l'illustration de code.
- Place ton CV PDF dans `public/` (par exemple `CV-Sam-Kabangu.pdf`), puis ajoute un lien de téléchargement dans la section d'accueil ou de contact.

## Notes sur le contenu

Le portfolio distingue les projets académiques, pratiques et initiatives personnelles. Les compétences en cours d'apprentissage sont explicitement indiquées afin de ne pas exagérer le niveau professionnel.
