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

                let tdIdentifiant = document.createElement("td")
                tdIdentifiant.innerHTML = Identifiant
                tr.appendChild(tdIdentifiant)

                let tdImg = document.createElement("td")
                let img = document.createElement("img")
                img.setAttribute("src", `../../../Public/Medias/Images/${produit.URL}`)
                img.setAttribute("alt", produit.Nom)
                img.classList.add("product-image")
                tdImg.appendChild(img)
                tr.appendChild(tdImg)

                let tdNom = document.createElement("td")
                tdNom.innerHTML = Nom
                tr.appendChild(tdNom)

                let tdQuantite = document.createElement("td")
                tdQuantite.innerHTML = Quantite
                tr.appendChild(tdQuantite)

                let tdPrix = document.createElement("td")
                tdPrix.innerHTML = Prix
                tr.appendChild(tdPrix)

                let tdDescription = document.createElement("td")
                tdDescription.innerHTML = Description
                tr.appendChild(tdDescription)

                let tdURL = document.createElement("td")
                tdURL.innerHTML = URL
                tr.appendChild(tdURL)

                table.appendChild(tr)
            })
        })

}