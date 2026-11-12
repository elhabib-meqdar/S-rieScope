# S-rieScope
premier brief sprint 3





🎬 SérieScope

📌 Présentation du projet

SérieScope est une application web monopage (Single Page Application) qui permet aux visiteurs de consulter un catalogue de séries et de documentaires.

L'application permet de :

- Consulter les séries disponibles.
- Rechercher une série par son nom.
- Filtrer les séries par genre.
- Ajouter une nouvelle série à partir d'un formulaire.
- Afficher les informations de chaque série.
- Réinitialiser les filtres et retrouver le catalogue complet.

Les données initiales sont récupérées depuis l'API TVmaze.

🛠️ Technologies utilisées

- HTML5 : structure de la page web.
- Tailwind CSS : mise en forme et design responsive.
- JavaScript Vanilla : logique et interactions.
- Fetch API : récupération des données depuis l'API.
- TVmaze API : source des données des séries.
- Git & GitHub : gestion des versions et collaboration.
- Jira : organisation et suivi des tâches.
- Figma : conception des maquettes desktop et mobile.

🌐 API utilisée

L'application utilise l'API TVmaze pour récupérer les informations des séries.

URL de l'API :

https://api.tvmaze.com/shows?page=0

Méthode HTTP utilisée : "GET"

Les informations récupérées comprennent :

- "name" : nom de la série.
- "language" : langue.
- "genres" : genres de la série.
- "status" : état de la série.
- "image.medium" : affiche de la série.
- "summary" : description.

⚙️ Fonctionnalités principales

1. Affichage du catalogue

- Récupération des 20 premières séries depuis l'API.
- Affichage sous forme de cartes.
- Gestion des images et informations manquantes.

2. Recherche par nom

- Recherche dynamique à chaque saisie.
- Recherche insensible aux majuscules et minuscules.
- Recherche par nom partiel.

3. Filtrage par genre

- Affichage des genres disponibles.
- Filtrage avec "filter()" et "includes()".
- Possibilité d'afficher toutes les séries.

4. Ajout d'une série

- Saisie du titre, de la langue et du genre.
- Vérification des champs obligatoires.
- Ajout dynamique au catalogue sans rechargement de la page.
- Réinitialisation du formulaire après l'ajout.

5. Fonctionnalités bonus

- Sauvegarde des séries ajoutées avec "localStorage".
- Affichage d'une fiche détaillée pour chaque série.

📂 Structure du projet

SerieScope/
│
├── index.html
│
│
├── js/
│ └── script.js
│
├── images/
│ └── placeholder.png
│
└── README.md

🚀 Installation et lancement

1. Cloner le dépôt GitHub :

git clone URL_DU_DEPOT

2. Accéder au dossier du projet :

cd SerieScope

3. Ouvrir le projet dans Visual Studio Code.

4. Lancer le fichier "index.html" avec l'extension Live Server.

Aucune installation supplémentaire n'est nécessaire.

Une connexion Internet est requise pour récupérer les données depuis l'API TVmaze.

🌿 Organisation GitFlow

Le projet utilise la méthode GitFlow pour organiser le développement.

Branches principales :

- "main" : version stable du projet.
- "develop" : branche principale de développement.

Branches de fonctionnalités :

- "feature/layout" : création de la structure HTML et du design.
- "feature/fetch-shows" : récupération des séries depuis l'API.
- "feature/filter-by-genre" : recherche et filtrage par genre.
- "feature/add-show" : ajout de nouvelles séries.

Les fonctionnalités sont intégrées à l'aide de Pull Requests.

Aucun commit direct n'est effectué sur "main" ou "develop".

📋 Organisation des tâches

Le suivi du projet est réalisé avec Jira.

Les statuts utilisés sont :

- À faire
- En cours
- En revue
- Terminé

💾 Stockage des données

Les données initiales sont récupérées depuis l'API TVmaze et conservées dans un tableau JavaScript.

Les séries ajoutées par l'utilisateur sont conservées dans le navigateur jusqu'au rechargement de la page.

Si la fonctionnalité bonus "localStorage" est activée, les séries ajoutées restent disponibles après le rechargement.

👨‍💻 Auteur

Projet réalisé individuellement dans le cadre d'un exercice de développement web.

Nom : [Meqdar Elhabib]

Projet : SérieScope

Date : Novembre 2026

📄 Licence

Projet pédagogique réalisé dans un cadre de formation.
