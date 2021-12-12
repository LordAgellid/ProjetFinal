const express = require("express")
const app = express()
const cors = require("cors")
const requete = require("../Serveur/Database/requeteKnex")

const PORT = process.env.PORT || 5000;

/*----------------------------------- READING/LISTENING PORTS -----------------------------------*/

app.use(cors())
app.set('json spaces', 2)
app.use(express.urlencoded({ extended: false }))

/*----------------------------------- PROFILES GET REQUEST -----------------------------------*/
app.get("/administrateurs", async (req, rep) => {
    try {
        let table = await requete.afficherAdmins()
        rep.status(200).json(table)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PRODUCTS GET REQUEST -----------------------------------*/
app.get("/produits", async (req, rep) => {
    try {
        let produits = await requete.afficherProduits()
        rep.status(200).json(produits)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PROFILE GET REQUEST -----------------------------------*/
app.get("/profil/:id", async (req, rep) => {
    try {
        let admin = await requete.afficherUnAdmin(req.params.id);
        rep.status(200).json(admin);
    }
    catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PRODUCT GET REQUEST -----------------------------------*/
app.get("/produit/:id", async (req, rep) => {
    try {
        let produit = await requete.afficherUnProduit(req.params.id)
        rep.status(200).json(produit)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- BLOQUER COMPTE -----------------------------------*/

app.post('/bloquerAdmin/:id', async (req, rep) =>{
    try {
        let bloquer = await requete.bloquerAdmin(parseInt(req.params.id))
        rep.status(200).json(bloquer)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- MODIFIER TABLE PUT REQUEST -----------------------------------*/
app.put("/modifier/:id", async (req, rep) => {
    try {
        console.log("Bonjour\n")
        console.log(req.body)

        let enregistrement = await requete.modifierTable(parseInt(req.params.id), req.body)
        rep.status(200).json(enregistrement)
    }
    catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- CONNEXION POST REQUEST -----------------------------------*/

app.post("/connexion", async (req, rep) => {
    try {
        let table = await requete.afficherAdmins()

        let admin, valide;

        const info = {
            id: req.body.id,
            password: req.body.password
        };

        console.log(info);

        for (i = 0; i < table.length; i++) {
            valide = 0;
            admin = table[0];

            if (!admin.CompteBloque) {
                valide += 1;
                if (info.id === admin.Username && info.password === admin.Password) {
                    valide += 1
                    break;
                }
            }
        }

        if (valide === 1) {
            rep.status(200).json({
                success: false,
                compteBloque: false,
                erreur: "Mot de passe ou nom d'utilisateur invalide, il vous reste "
            })
        } else if (valide === 0) {
            rep.status(200).json({
                success: false,
                compteBloque: true,
                erreur: "Compte bloqué"
            })
        } else {
            rep.status(200).json({
                success: true,
                username: admin.Username
            })
        }

    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PORT LISTENER -----------------------------------*/

app.listen(PORT, () => console.log("L'application serveur roule sur le port " + PORT + ".\n"))