const express = require("express");
const app = express();
const cors = require("cors");
const requete = require("./data-base/requeteKnex.js")

const PORT = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.urlencoded({extended: false}))
//table Profils
app.get("/profil", async (req, rep) =>{
    try{
        table = await requete.tableTableProfil()

        rep.status(200).json(table)

    }catch(error){
        rep.status(500).json({
            erreur: error 
        })
    }
})

// connexion
app.post("/connexion", async (req, rep) =>{
    try{
        const table = await requete.tableTableProfil()
        
        let admin, valide ;
        
        const info = {
            id: req.body.id,
            password: req.body.password
        }

        for (let i = 0; i < table.length; i++) {
            valide = 0;
            admin = table[0];

            if(info.id === admin.nom_utisateur && info.password === admin.mot_de_passe){
                valide += 1
                
                if(!admin.compte_bloque){
                    valide += 1;
                    break;
                }
            }
        }

        if (valide === 0) {
            rep.status(200).json({
                success: false,
                compteBloque: false,
                erreur: "Mot de passe ou nom d'utilisateur invalide "
            })
        } else if(valide === 1){
            rep.status(200).json({
                success: false,
                compteBloque: true,
                erreur: "Compte Bloque"
            })
        }else{
            rep.status(200).json({success: true})
        }

        
        
    }catch(error){
        rep.status(500).json({
            erreur: error 
        })
    }
})



app.listen(PORT, ()=> console.log("Le serveur ecoute au port " + PORT))