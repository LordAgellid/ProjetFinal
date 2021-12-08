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
app.get("/Administrateurs", async (req, rep) => {
    try {
        table = await requete.afficherAdmins()
        rep.status(200).json(table)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PRODUCTS GET REQUEST -----------------------------------*/
app.get("/Produits", async (req, rep) => {
    try {
        produits = await requete.afficherProduits()
        rep.status(200).json(produits)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PROFILE GET REQUEST -----------------------------------*/
app.get("/Profil/:id", async (req, rep) => {
    try {
        admin = await requete.afficherUnAdmin(req.params.id);
        rep.status(200).json(admin);
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- PRODUCT GET REQUEST -----------------------------------*/
app.get("/Produit/:id", async (req, rep) => {
    try {
        produit = await requete.afficherUnProduit(req.params.id)
        rep.status(200).json(produit)
    } catch (error) {
        rep.status(500).json({
            erreur: error
        })
    }
})

/*----------------------------------- CONNEXION POST REQUEST -----------------------------------*/

app.post("/Connexion", async (req, rep) => {
    try {
        const table = await requete.afficherAdmins()
        let admin, valide

        const info = {
            id: req.body.id,
            password: req.body.password
        }

        for (i = 0; i < table.length; i++) {
            valide = 0
            admin = table[0]

            if (info.id === admin.Username && info.password === admin.Password) {
                valide += 1

                if (!admin.CompteBloque) {
                    valide += 1
                    break
                }
            }
        }

        if (valide === 0) {
            rep.status(200).json({
                success: false,
                compteBloque: false,
                erreur: "Mot de passe ou nom d'utilisateur invalide "
            })
        } else if (valide === 1) {
            rep.status(200).json({
                success: false,
                compteBloque: true,
                erreur: "Compte Bloque"
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