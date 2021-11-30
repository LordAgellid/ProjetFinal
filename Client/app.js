const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

/*----------------------------------- READING /PUBLIC REPERTORY -----------------------------------*/

app.use(express.static(path.join(__dirname, "/Public/..")));

/*----------------------------------- PAGES GET REQUESTS -----------------------------------*/

app.get("/Accueil", (req, rep) => {
    rep.sendFile(path.join(__dirname, "Public/Pages/Accueil/accueil.html"))
})

app.get("/Galerie", (req, rep) => {
    rep.sendFile(path.join(__dirname, "Public/Pages/Galerie/galerie.html"))
})

app.get("/Connexion", (req, rep) => {
    rep.sendFile(path.join(__dirname, "Public/Pages/Connexion/connexion.html"))
})

app.get("/Profil/", (req, rep) => {
    rep.sendFile(path.join(__dirname, "Public/Pages/Profil/profilAdmin.html"))
})

/*----------------------------------- PORT LISTENER -----------------------------------*/

app.listen(PORT, () => console.log("L'application client roule sur le port " + PORT))