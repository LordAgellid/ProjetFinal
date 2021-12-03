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

-- Insertion dans la table des Produits

INSERT INTO Produits (Identifiant, Nom, Quantite, Prix, Description, URL) VALUES

    (1, 'AMETHYST', 100, 10, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'AMETHYST.png'),

    (2, 'BRAIN MARY JANE', 90, 11, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'BRAIN_MARY_JANE.png'),

    (3, 'CHRONOS', 60, 20, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'CHRONOS.png'),

    (4, 'CYBER DOC', 1000, 5, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'CYBER_DOC.png'),

    (5, 'GOLDEN BOY', 55, 23, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'GOLDEN_BOY.png'),

    (6, 'JOKER', 20, 90, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'JOKER.png'),

    (7, 'KIM-KARDASHIAN', 15, 95, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'KIM-KARDASHIAN.png'),

    (8, 'KUSAMA', 1000, 6, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'KUSAMA.png'),

    (9, 'LIL UZI', 30, 67, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.", 'LIL_UZI.png'),

    (10, 'RAINBOW', 15, 91, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'RAINBOW.png'),

    (11, 'RASTIN', 50, 45, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'RASTIN.png'),

    (12, 'SILK', 10, 100, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'SILK.png'),

    (13, 'THE AI', 40, 67, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_AI.png'),

    (14, 'THE APEQUEEN', 1000, 1, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_APEQUEEN.png'),

    (15, 'THE BLIND', 1000, 5, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_BLIND.png'),

    (16, 'THE BROTHER', 76, 15, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_BROTHER.png'),

    (17, 'THE CYBORG', 30, 70, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_CYBORG.png'),

    (18, 'THE DEAF', 101, 10, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_DEAF.png'),

    (19, 'THE DJ', 100, 11, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_DJ.png'),

    (20, 'THE GAMEMASTER', 18, 91, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_GAMEMASTER.png'),

    (21, 'THE GOD FATHER', 100, 8, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_GOD_FATHER.png'),

    (22, 'THE HOST', 90, 12, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_HOST.png'),

    (23, 'THE ORIENTAPE', 70, 56, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_ORIENTAPE.png'),

    (24, 'THE SILENT', 30, 49, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'THE_SILENT.png'),

    (25, 'VORDON', 80, 16, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'VORDON.png'),

    (26, 'WINTER', 1000, 5, "Voici la toute nouvelle collection de NFT de INFINITE SHOP, The Billionaire Clubs. Nous mettons en vedette plusieurs célébrités ambitieux avec un bon goût du style. Il s'agit d'une collection unique. Nous avons fait appel aux plus talentuex artistes et les plus influentes pour créer cette magnifique édition. Acquérir l'une de ces oeuvres vous permettra d'avoir accès à une plénitude d autres collections à venir.",'WINTER.png');

-- Affichages

SELECT * FROM Administrateurs

SELECT * FROM Produits

-- Suppressions

DROP TABLE Administrateurs
DELETE FROM Administrateurs

DROP TABLE Produits
DELETE FROM Produits

SELECT * FROM Administrateurs
WHERE Username = "martinc"