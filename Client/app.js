const express = require("express")
const app = express();
const path = require("path")

const PORT = process.env.PORT || 3000 ;

app.use(express.static("public"));


app.get("/connexion", (req, rep) =>{
    rep.sendFile(path.join(__dirname, "public/connexion/connexion.html"))
})

app.get("/profilAdmin", (req, rep) =>{
    rep.sendFile(path.join(__dirname, "public/profilAdmin/profilAdmin.html"))
})

app.listen(PORT, () => console.log("Le client est entrain d'ecouter sur le port " + PORT))