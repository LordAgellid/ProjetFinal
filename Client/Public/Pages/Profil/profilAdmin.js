window.onload = load

function load() {

    const params = new URLSearchParams(window.location.search)
    const user = params.get("id")

    fetch("http://localhost:5000/profil/" + user)
        .then(rep => {
            return rep.json()
        })
        .then(admin => {

            //Administrator div container
            let adminInfo = document.getElementById("admin-profile-infos")

            //Database variables
            let nom = admin[0].Nom
            let prenom = admin[0].Prenom
            let username = admin[0].Username
            let courriel = admin[0].Courriel

            //First name & last name info
            let h1 = document.createElement("h1")
            h1.setAttribute("id", "prenomNom")
            h1.innerHTML = prenom + " " + nom
            adminInfo.appendChild(h1)

            //Username & e-mail info
            let p = document.createElement("p");
            p.setAttribute("id", "usernameCourriel")
            p.innerHTML = username + " - " + courriel
            adminInfo.appendChild(p)

        })

    fetch("http://localhost:5000/produits")
        .then(rep => {
            return rep.json()
        })
        .then(produits => {

            let table = document.getElementById("tbody")
            // boucle qui lit toutes les donnee et qui creer un tableau avec  
            produits.forEach(produit => {

                let identifiant = produit.Identifiant
                let nom = produit.Nom
                let quantite = produit.Quantite
                let prix = produit.Prix
                let description = produit.Description
                let url = produit.URL
                
                // creer le tr (la rangee)
                let tr = document.createElement("tr")
                tr.setAttribute("id", identifiant)

                // creer le td
                let tdIdentifiant = document.createElement("td")
                tdIdentifiant.innerHTML = identifiant
                tdIdentifiant.setAttribute("class", `${identifiant}`)
                tdIdentifiant.setAttribute("id", `identifiant-${identifiant}`)
                tr.appendChild(tdIdentifiant)

                // creer l'image qui va dans le premier td
                let tdImg = document.createElement("td")
                let img = document.createElement("img")
                
                img.setAttribute("src", "../../../Public/Medias/Images/" + url)
                img.setAttribute("alt", nom)

                img.classList.add("product-image")
                tdImg.appendChild(img)
                tdImg.setAttribute("class", `${identifiant}`)
                tdImg.setAttribute("id", `img-${identifiant}`)
                tr.appendChild(tdImg)

                // Nom
                let tdNom = document.createElement("td")
                let pNom = document.createElement("p")
                pNom.innerHTML = nom
                tdNom.setAttribute("class", `${identifiant}`)
                tdNom.setAttribute("id", `nom-${identifiant}`)
                pNom.setAttribute("id", `p-nom-${identifiant}`)
                tdNom.appendChild(pNom)
                tr.appendChild(tdNom)

                // Quantite
                let tdQuantite = document.createElement("td")
                let pQuantite = document.createElement("p")
                pQuantite.innerHTML = quantite
                tdQuantite.setAttribute("class", `${identifiant}`)
                tdQuantite.setAttribute("id", `quantite-${identifiant}`)
                pQuantite.setAttribute("id", `p-quantite-${identifiant}`)
                tdQuantite.appendChild(pQuantite)
                tr.appendChild(tdQuantite)

                // Prix
                let tdPrix = document.createElement("td")
                let pPrix = document.createElement("p")
                pPrix.innerHTML = prix
                tdPrix.setAttribute("class", `${identifiant}`)
                tdPrix.setAttribute("id", `prix-${identifiant}`)
                pPrix.setAttribute("id", `p-prix-${identifiant}`)
                tdPrix.appendChild(pPrix)
                tr.appendChild(tdPrix)

                // Description
                let tdDescription = document.createElement("td")
                let pDescription = document.createElement("p")
                pDescription.innerHTML = description
                tdDescription.setAttribute("class", `${identifiant} descriptiontextarea`)
                tdDescription.setAttribute("id", `description-${identifiant}`)
                pDescription.setAttribute("id", `p-description-${identifiant}`)
                tdDescription.appendChild(pDescription)
                tr.appendChild(tdDescription)

                // URL
                let tdURL = document.createElement("td")
                let pUrl = document.createElement("p")
                pUrl.innerHTML = url
                tdURL.setAttribute("class", `${identifiant}`)
                tdURL.setAttribute("id", `url-${identifiant}`)
                pUrl.setAttribute("id", `p-url-${identifiant}`)
                tdURL.appendChild(pUrl)
                tr.appendChild(tdURL)

                // creer le bouton editer 
                const tdBoutons = document.createElement("td")
                const btnEditer = document.createElement("button")
                btnEditer.innerHTML = "Éditer"
                btnEditer.setAttribute("class", `btnEditer`)
                btnEditer.setAttribute("id", `btnEditer-${identifiant}`)
                tr.appendChild(tdBoutons)
                tdBoutons.appendChild(btnEditer)
                
                table.appendChild(tr)

            })

            const tableau = document.querySelector("#tbody")

            console.log(tableau)

            // event listener pour pouvoir editer le tableau
            tableau.addEventListener("click", (e) => {

                let classe = e.target.className

                if (classe === "btnEditer") {
                    
                    //aller chercher le id de la rangee
                    let td = e.target.parentElement
                    // console.log(td)
                    let tr = td.parentNode
                    // console.log(tr)
                    let ligne = tr.id

                    // aller chercher les elements par leurs ID 
                    let identifiant = document.getElementById("identifiant-" + ligne)
                    let nom = document.getElementById("p-nom-" + ligne)
                    let quantite = document.getElementById("p-quantite-" + ligne)
                    let prix = document.getElementById("p-prix-" + ligne)
                    let description = document.getElementById("p-description-" + ligne)
                    let url = document.getElementById("p-url-" + ligne)

                    /*remplacer le contenue de la table une entree text*/
                    
                    // nom
                    const inputNom = document.createElement("input")
                    inputNom.setAttribute("class", "inputNom")
                    inputNom.type = "text"
                    inputNom.required = true
                    inputNom.value = nom.innerHTML
                    nom.parentNode.replaceChild(inputNom, nom)

                    // quantite
                    const inputQuantite = document.createElement("input")
                    inputQuantite.setAttribute("class", "inputQuantite")
                    inputQuantite.type = "number"
                    inputQuantite.min = "0"
                    inputQuantite.value = quantite.innerHTML
                    quantite.parentNode.replaceChild(inputQuantite, quantite)

                    // prix
                    const inputPrix = document.createElement("input")
                    inputPrix.setAttribute("class", "inputPrix")
                    inputPrix.type = "number"
                    inputPrix.min = "0"
                    inputPrix.value = prix.innerHTML
                    prix.parentNode.replaceChild(inputPrix, prix)

                    // description
                    const textAreaDescription = document.createElement("textarea")
                    textAreaDescription.innerHTML = description.innerHTML
                    description.parentNode.replaceChild(textAreaDescription, description)

                    // url
                    const inputURL = document.createElement("input")
                    inputURL.setAttribute("class", "inputURL")
                    inputURL.type = "text"
                    inputURL.value = url.innerHTML
                    url.parentNode.replaceChild(inputURL, url)

                    /*Creer les boutons*/
                    
                    // Bouton enregistrer
                    const boutonEnregistrer = document.createElement("button")
                    boutonEnregistrer.innerHTML = "Enregistrer"
                    boutonEnregistrer.setAttribute("class", "btnEnregistrer")
                    boutonEnregistrer.setAttribute("id", `btnEnregistrer-${identifiant}`)

                    // Bouton Annuler
                    const boutonAnnuler = document.createElement("button")
                    boutonAnnuler.innerHTML = "Annuler"
                    boutonAnnuler.setAttribute("class", "btnAnnuler")
                    boutonAnnuler.setAttribute("id", `btnAnnuler-${identifiant}`)

                    td.removeChild(e.target)

                    td.appendChild(boutonEnregistrer)
                    td.appendChild(boutonAnnuler)

                    // creation du bouton Editer pour pouvoir le reutiliser 
                    const boutonEditer = document.createElement("button")
                    boutonEditer.innerHTML = "Éditer"
                    boutonEditer.setAttribute("class", `btnEditer`)
                    boutonEditer.setAttribute("id", `btnEditer-${identifiant}`)
                    
                    // ----------------------------------------------------------------------------------------------------
                    // event listener pour pouvoir annuler ou enregistrer
                    td.addEventListener("click", (e) => {

                        if (e.target.className === "btnAnnuler") {

                            // remplacer le contenue de la rangee par l'ancien contenue
                            inputNom.parentNode.replaceChild(nom, inputNom)
                            inputQuantite.parentNode.replaceChild(quantite, inputQuantite)
                            inputPrix.parentNode.replaceChild(prix, inputPrix)
                            textAreaDescription.parentNode.replaceChild(description, textAreaDescription)
                            inputURL.parentNode.replaceChild(url, inputURL)

                            
                            // effacer les boutons
                            td.removeChild(boutonEnregistrer)
                            
                            // remplacer un bouton par un autre 
                            td.replaceChild(boutonEditer, boutonAnnuler)

                        }
                        else if (e.target.className === "btnEnregistrer") {
                            /*Modifierla table*/

                            // nom
                            nom.innerHTML = inputNom.value  
                            inputNom.parentNode.replaceChild(nom, inputNom)

                            // quantite
                            quantite.innerHTML = inputQuantite.value
                            inputQuantite.parentNode.replaceChild(quantite, inputQuantite)
                            
                            // prix
                            prix.innerHTML = inputPrix.value
                            inputPrix.parentNode.replaceChild(prix, inputPrix)

                            // description
                            description.innerHTML = textAreaDescription.value
                            textAreaDescription.parentNode.replaceChild(description, textAreaDescription)

                            // url
                            url.innerHTML = inputURL.value
                            inputURL.parentNode.replaceChild(url, inputURL)

                            // effacer les boutons
                            td.removeChild(boutonEnregistrer)
                            
                            // remplacer un bouton par un autre 
                            td.replaceChild(boutonEditer, boutonAnnuler)

                            // modifier la base de donnee
                            fetch(`http://localhost:5000/modifier/${ligne}`, {
                                headers: {"Content-Type":"application/x-www-form-urlencoded"},
                                method: "PUT",
                                body: `Nom=${nom.innerHTML}&Quantite=${quantite.innerHTML}&Prix=${prix.innerHTML}&Description=${description.innerHTML}&URL=${url.innerHTML}`
                            })
                            .then(rep => {
                                return rep.json()
                            })

                        }

                    })

                }

            })

        })

}