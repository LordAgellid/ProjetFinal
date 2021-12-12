window.onload = load

function load() {

    const params = new URLSearchParams(window.location.search)
    const image = params.get("id")

    fetch(`http://localhost:5000/produit/${image}`)
        .then(rep => {
            return rep.json()
        })
        .then(produit => {

            let equivPrixCan = 5524.20

            //Column 1
            let column1 = document.getElementById("column-1")
            let divProductPrice = document.getElementById("product-price")

            //Database variables
            let Nom = produit[0].Nom
            let Quantite = produit[0].Quantite
            let Prix = produit[0].Prix
            let Description = produit[0].Description
            let URL = produit[0].URL

            let img = document.createElement("img")
            img.setAttribute("src", `../../../Public/Medias/Images/${URL}`)
            img.setAttribute("alt", Nom)
            img.classList.add("product-image")
            column1.insertAdjacentElement("afterbegin", img)

            let pPrix = document.createElement("p")
            pPrix.innerHTML = Prix + " ETH"
            divProductPrice.appendChild(pPrix)

            let pPrixCan = document.createElement("p")
            pPrixCan.classList.add("product-can-price")
            pPrixCan.innerHTML = "(CAN $" + Prix * equivPrixCan + ")"
            divProductPrice.appendChild(pPrixCan)

            //Column 2            
            let divProductName = document.getElementById("product-name")
            let divdescription = document.getElementById("description")
            let divquantity = document.getElementById("quantity")

            let h1Name = document.createElement("h1")
            h1Name.innerHTML = Nom
            divProductName.appendChild(h1Name)

            let pDescription = document.createElement("p")
            pDescription.innerHTML = Description
            divdescription.appendChild(pDescription)

            let pquantity = document.createElement("p")
            pquantity.innerHTML = Quantite + " unité(s) restante(s)"
            divquantity.appendChild(pquantity)

        })
        
}