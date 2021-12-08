# Projet-Application-Web-1
 
## Description
    Le but du projet est de créer un site web permettant de vendre des produits en ligne. Nous avons décidé, pour notre magasin en ligne, de vendre des NFT (Non-Fungible Token). Il s’agit d’un concept qui consiste à rajouter une signature unique à un fichier quelconque grâce à des données spécifiques. On peut retrouver dans cet ensemble de NFT des images, des tweets, un texte posté sur un site web, un objet physique et pleins d’autres variantes.
    
    Cette signature unique veut tout simplement dire qu’un propriétaire peut posséder un exemplaire qui se différentie totalement de toutes formes de répliques existantes dans le monde entier.


## Planification

### Membres de l'équipe
    Yao Nathanaël Kékéli Kounakou & Makhlouf Hennine - Groupe: 00001

### Répartition des tâches
    FrontEnd
        •	Recherche de contenu | Makhlouf
            o	Images qui feront offices de NFT
            o	Noms, Description, Prix, Quantité, etc.

        •	Création des pages (HTML) et ajout du style (CSS) | Yao
            o	Pages : Accueil, Produits, Galerie, Connexion, Profil de l’administrateur
        
        •	Création des scripts des pages | Makhlouf & Yao
            o	Fonction d’affichage des produits sur la page d’accueil
            o	Fonction d’affichage du détail des produits
            o	Fonction de connexion de l’administrateur
            o	Fonction d’affichage de la page administrateur et de la base de données


        
    BackEnd
        •	Base de données (SQLITE) | Makhlouf
            o	Création de la base de données des Produits et des Administrateurs
            o	Insertion des différentes données dans la table Produits et Administrateurs

        •	Requêtes Knex | Makhlouf
            o	Création des fonctions d’affichages pour le site web (affichage des produits, affichage de l’administrateur)

        •	Routages | Makhlouf & Yao
            o	Création des applications de routage pour le côté Client (affichage des pages du site web) et Serveur (requêtes GET, POST & PUT)
            o	Création des applications de routages du côté Client (Yao) et Serveur (Makhlouf)