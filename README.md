# S-rieScope

==================================================================================
brief 2 sprint 3
==================================================================================



🎬 SérieScope – Gestion de catalogue de séries


📌 Présentation du projet

SérieScope est une application web permettant à une médiathèque de gérer un catalogue de séries télévisées.

L'application permet de consulter, rechercher, filtrer, ajouter, modifier et supprimer des séries. Toutes les opérations sont effectuées à travers une API REST afin de garantir la persistance des données côté serveur.


🎯 Objectifs du projet

- Maîtriser les requêtes HTTP avec Axios.
- Organiser le code JavaScript en plusieurs couches.
- Utiliser "async/await" et "try/catch" pour gérer les opérations asynchrones.
- Effectuer les opérations CRUD avec une API REST.
- Implémenter une recherche et des filtres côté serveur.
- Gérer les erreurs HTTP, réseau et timeout.
- Utiliser LocalStorage pour mémoriser les critères de recherche.
- Respecter les bonnes pratiques Git et GitFlow.


⚙️ Technologies utilisées

- HTML5 : structure de l'application.
- CSS3 : mise en forme et design responsive.
- JavaScript ES6+ : logique et interactions.
- Axios : communication avec l'API REST.
- REST API : gestion et persistance des séries.
- LocalStorage : sauvegarde des critères de recherche.
- Git & GitHub : gestion des versions et collaboration.


🌐 API utilisée

L'application communique avec l'API SérieScope :

"https://seriescope-api.vercel.app/api"

Une instance Axios unique est configurée avec :

- "baseURL" : URL de l'API.
- "timeout" : 8000 ms.
- "headers" : identification de l'apprenant avec "X-Learner".


✨ Fonctionnalités principales

1. Consultation des séries

- Affichage du catalogue.
- Récupération des séries depuis le serveur.

2. Recherche et filtres

- Recherche par nom.
- Filtrage par genre.
- Filtrage par langue.
- Combinaison des critères de recherche.
- Réinitialisation des filtres.
- Affichage d'un message lorsqu'aucune série ne correspond aux critères.

3. Ajout d'une série (Create)

- Saisie du nom, de la langue et du genre.
- Validation des champs.
- Envoi des données au serveur avec une requête POST.
- Affichage des erreurs de validation.
- Actualisation du catalogue après l'ajout.

4. Modification d'une série (Update)

- Chargement des informations d'une série.
- Préremplissage du formulaire.
- Modification des informations.
- Enregistrement avec une requête PATCH.
- Actualisation du catalogue après la modification.

5. Suppression d'une série (Delete)

- Suppression d'une série par son identifiant.
- Confirmation avant la suppression.
- Actualisation du catalogue après la suppression.

6. Gestion des erreurs

- Erreurs HTTP : 400, 404, 409 et 500.
- Erreurs réseau.
- Dépassement du délai d'attente (timeout).
- Notifications de succès et d'erreur.
- Gestion des états de chargement.

7. Persistance des données

- Les séries sont enregistrées sur le serveur.
- Les modifications sont conservées après le rechargement de la page.
- Les critères de recherche et de filtrage sont mémorisés dans LocalStorage.


🏗️ Architecture du projet

Le projet adopte une architecture en couches afin de séparer les responsabilités.

SérieScope/
│
├── index.html
│
├── css/
│ └── style.css
│
└── src/
    ├── services/
    │ ├── api.js
    │ └── serieService.js
    │
    ├── data/
    │ └── store.js
    │
    ├── ui/
    │ ├── cards.js
    │ ├── form.js
    │ ├── filters.js
    │ └── notify.js
    │
    └── main.js


Rôle des différentes couches

Fichier| Responsabilité

"api.js"| Configuration de l'instance Axios.
"serieService.js"| Communication avec l'API et opérations CRUD.
"store.js"| Gestion de l'état et LocalStorage.
"cards.js"| Affichage des cartes de séries.
"form.js"| Gestion du formulaire d'ajout et de modification.
"filters.js"| Gestion de la recherche et des filtres.
"notify.js"| Affichage des notifications.
"main.js"| Point d'entrée et gestion des événements.


📅 Informations pédagogiques

- Modalité : travail individuel.
- Durée : 4 jours.
- Date de lancement : 16 novembre 2026.
- Date de rendu : 20 novembre 2026 à 17h00.

👨‍💻 Auteur

Elhabib Meqdar












====================================================================================
premier brief sprint 3
====================================================================================




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
