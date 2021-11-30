-- SQLite

-- Création de la table des Administrateurs
CREATE TABLE Administrateurs (
    Nom VARCHAR(60),
    Prenom VARCHAR(60),
    Username VARCHAR(60),
    Courriel VARCHAR(60),
    Password VARCHAR(60),
    CompteBloque INT
)

-- Création de la table des Produits
CREATE TABLE Produits (
    Identifiant INT PRIMARY KEY,
    Nom VARCHAR(100),
    Quantite INT,
    Prix REAL,
    Description TEXT,
    URL TEXT
)

-- Insertion dans la table des Administrateurs

INSERT INTO Administrateurs VALUES
("Martin", "Cloutier", "martinc", "martin.cloutier@gmail.com", "1234", 0);

-- Affichages

SELECT * FROM Administrateurs

SELECT * FROM Produits