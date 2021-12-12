window.onload = load

function load() {

    const params = new URLSearchParams(window.location.search)
    const user = params.get("id")

    fetch("http://localhost:5000/Profil/" + user)
        .then(rep => {
            return rep.json()
        })
        .then(admin => {
            console.log(admin)

            //Administrator div container
            let adminInfo = document.getElementById("admin-profile-infos")

            //Database variables
            let Nom = admin[0].Nom
            let Prenom = admin[0].Prenom
            let Username = admin[0].Username
            let Courriel = admin[0].Courriel

            //First name & last name info
            let h1 = document.createElement("h1")
            h1.setAttribute("id", "prenomNom")
            h1.innerHTML = Prenom + " " + Nom
            adminInfo.appendChild(h1)

            //Username & e-mail info
            let p = document.createElement("p");
            p.setAttribute("id", "usernameCourriel")
            p.innerHTML = Username + " - " + Courriel
            adminInfo.appendChild(p)
        })

    fetch("http://localhost:5000/Produits")
        .then(rep => {
            return rep.json()
        })
        .then(produits => {
            let table = document.getElementById('tbody')

            produits.forEach(produit => {

                let Identifiant = produit.Identifiant
                let Nom = produit.Nom
                let Quantite = produit.Quantite
                let Prix = produit.Prix
                let Description = produit.Description
                let URL = produit.URL

                let tr = document.createElement("tr")
                tr.setAttribute('id', Identifiant)

                let tdIdentifiant = document.createElement("td")
                tdIdentifiant.innerHTML = Identifiant
                tdIdentifiant.setAttribute('class', `${Identifiant}`)
                tdIdentifiant.setAttribute('id', `identifiant-${Identifiant}`)
                tr.appendChild(tdIdentifiant)

                let tdImg = document.createElement("td")
                let img = document.createElement("img")
                
                img.setAttribute("src", "../../../Public/Medias/Images/" + URL)
                img.setAttribute("alt", Nom)

                img.classList.add("product-image")
                tdImg.appendChild(img)
                tdImg.setAttribute('class', `${Identifiant}`)
                tdImg.setAttribute('id', `img-${Identifiant}`)
                tr.appendChild(tdImg)

                // Nom
                let tdNom = document.createElement("td")
                let pNom = document.createElement("p")
                pNom.innerHTML = Nom
                tdNom.setAttribute('class', `${Identifiant}`)
                tdNom.setAttribute('id', `nom-${Identifiant}`)
                pNom.setAttribute('id', `p-nom-${Identifiant}`)
                tdNom.appendChild(pNom)
                tr.appendChild(tdNom)

                // Quantite
                let tdQuantite = document.createElement("td")
                let pQuantite = document.createElement("p")
                pQuantite.innerHTML = Quantite
                tdQuantite.setAttribute('class', `${Identifiant}`)
                tdQuantite.setAttribute('id', `quantite-${Identifiant}`)
                pQuantite.setAttribute('id', `p-quantite-${Identifiant}`)
                tdQuantite.appendChild(pQuantite)
                tr.appendChild(tdQuantite)

                // Prix
                let tdPrix = document.createElement("td")
                let pPrix = document.createElement("p")
                pPrix.innerHTML = Prix
                tdPrix.setAttribute('class', `${Identifiant}`)
                tdPrix.setAttribute('id', `prix-${Identifiant}`)
                pPrix.setAttribute('id', `p-prix-${Identifiant}`)
                tdPrix.appendChild(pPrix)
                tr.appendChild(tdPrix)

                // Description
                let tdDescription = document.createElement("td")
                let pDescription = document.createElement("p")
                pDescription.innerHTML = Description
                tdDescription.setAttribute('class', `${Identifiant} descriptiontextarea`)
                tdDescription.setAttribute('id', `description-${Identifiant}`)
                pDescription.setAttribute('id', `p-description-${Identifiant}`)
                tdDescription.appendChild(pDescription)
                tr.appendChild(tdDescription)

                // URL
                let tdURL = document.createElement("td")
                let pUrl = document.createElement("p")
                pUrl.innerHTML = URL
                tdURL.setAttribute('class', `${Identifiant}`)
                tdURL.setAttribute('id', `url-${Identifiant}`)
                pUrl.setAttribute('id', `p-url-${Identifiant}`)
                tdURL.appendChild(pUrl)
                tr.appendChild(tdURL)

                const tdBoutons = document.createElement('td')
                const btnEditer = document.createElement('button')
                btnEditer.innerHTML = 'Éditer'
                btnEditer.setAttribute('class', `btnEditer`)
                btnEditer.setAttribute('id', `btnEditer-${Identifiant}`)
                tr.appendChild(tdBoutons)
                tdBoutons.appendChild(btnEditer)
                
                table.appendChild(tr)

            })

            const tableau = document.querySelector('#tbody')
            tableau.addEventListener('click', (e) => {
                let classe = e.target.className

                if (classe === 'btnEditer') {
                    let td = (e.target.parentElement)
                    let tr = td.parentNode
                    let ligne = tr.id

                    // // let img = document.getElementById('img-' + ligne).innerHTML
                    let identifiant = document.getElementById('identifiant-' + ligne).innerHTML
                    let nom = document.getElementById('p-nom-' + ligne)
                    let quantite = document.getElementById('p-quantite-' + ligne)
                    let prix = document.getElementById('p-prix-' + ligne)
                    let description = document.getElementById('p-description-' + ligne)
                    let url = document.getElementById('p-url-' + ligne)
                    // // console.log(`${identifiant} \n${nom} \n${quantite} \n${prix} \n${description} \n${url}`)

                    const inputNom = document.createElement('input')
                    inputNom.setAttribute("class", "inputNom")
                    inputNom.type = "text"
                    inputNom.required = true
                    inputNom.value = nom.innerHTML
                    nom.parentNode.replaceChild(inputNom, nom)

                    const inputQuantite = document.createElement('input')
                    inputQuantite.setAttribute("class", "inputQuantite")
                    inputQuantite.type = "number"
                    inputQuantite.min = "0"
                    inputQuantite.value = quantite.innerHTML
                    quantite.parentNode.replaceChild(inputQuantite, quantite)

                    const inputPrix = document.createElement('input')
                    inputPrix.setAttribute("class", "inputPrix")
                    inputPrix.type = "number"
                    inputPrix.min = "0"
                    inputPrix.value = prix.innerHTML
                    prix.parentNode.replaceChild(inputPrix, prix)

                    const textAreaDescription = document.createElement('textarea')
                    textAreaDescription.innerHTML = description.innerHTML
                    description.parentNode.replaceChild(textAreaDescription, description)

                    const inputURL = document.createElement('input')
                    inputURL.setAttribute("class", "inputURL")
                    inputURL.type = "text"
                    inputURL.value = url.innerHTML
                    url.parentNode.replaceChild(inputURL, url)

                    const boutonEnregistrer = document.createElement('button')
                    boutonEnregistrer.innerHTML = 'Enregistrer'
                    boutonEnregistrer.setAttribute('class', 'btnEnregistrer')
                    boutonEnregistrer.setAttribute('id', `btnEnregistrer-${identifiant}`)

                    const boutonAnnuler = document.createElement('button')
                    boutonAnnuler.innerHTML = 'Annuler'
                    boutonAnnuler.setAttribute('class', 'btnAnnuler')
                    boutonAnnuler.setAttribute('id', `btnAnnuler-${identifiant}`)

                    td.removeChild(e.target)

                    td.appendChild(boutonEnregistrer)
                    td.appendChild(boutonAnnuler)

                    const boutonEditer = document.createElement('button')
                    boutonEditer.innerHTML = 'Éditer'
                    boutonEditer.setAttribute('class', `btnEditer`)
                    boutonEditer.setAttribute('id', `btnEditer-${identifiant}`)
                    ///////////////////////////////////////////////////////////////////

                    td.addEventListener('click', (e) => {

                        if (e.target.className === 'btnAnnuler') {

                            inputNom.parentNode.replaceChild(nom, inputNom)
                            inputQuantite.parentNode.replaceChild(quantite, inputQuantite)
                            inputPrix.parentNode.replaceChild(prix, inputPrix)
                            textAreaDescription.parentNode.replaceChild(description, textAreaDescription)
                            inputURL.parentNode.replaceChild(url, inputURL)

                            td.removeChild(boutonAnnuler)
                            td.removeChild(boutonEnregistrer)

                            td.appendChild(boutonEditer)

                        } else if (e.target.className === 'btnEnregistrer') {

                            nom.innerHTML = inputNom.value
                            inputNom.parentNode.replaceChild(nom, inputNom)

                            quantite.innerHTML = inputQuantite.value
                            inputQuantite.parentNode.replaceChild(quantite, inputQuantite)

                            prix.innerHTML = inputPrix.value
                            inputPrix.parentNode.replaceChild(prix, inputPrix)

                            description.innerHTML = textAreaDescription.value
                            textAreaDescription.parentNode.replaceChild(description, textAreaDescription)

                            url.innerHTML = inputURL.value
                            inputURL.parentNode.replaceChild(url, inputURL)

                            td.removeChild(boutonAnnuler)
                            td.removeChild(boutonEnregistrer)

                            td.appendChild(boutonEditer)

                            fetch(`http://localhost:5000/modifier/${ligne}`, {
                                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                                method: 'PUT',
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