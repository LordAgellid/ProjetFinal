window.onload = load

function load() {
    
    fetch("http://localhost:5000/produits")
        .then(rep => {
            return rep.json()
        })
        .then(produits => {

            let div = document.getElementById("produits")

            produits.forEach(produit => {

                let products = document.createElement("div")
                products.classList.add("product")
                div.appendChild(products)

                
                let productImageContainer = document.createElement("div")
                productImageContainer.classList.add("product-image-container")
                products.appendChild(productImageContainer)

                let lienProduit = document.createElement("a")
                lienProduit.href = `http://localhost:3000/Details-produit/?id=${produit.Identifiant}`
                productImageContainer.appendChild(lienProduit)

                let img = document.createElement("img")
                img.setAttribute("src", `../../../Public/Medias/Images/${produit.URL}`)
                img.setAttribute("alt", produit.Nom)
                img.classList.add("product-image")
                lienProduit.appendChild(img)

                let productinfos = document.createElement("div")
                productinfos.classList.add("product-infos");
                products.appendChild(productinfos)

                let productTitle = document.createElement("p")
                productTitle.classList.add("product-title")
                productTitle.innerHTML = produit.Nom
                productinfos.appendChild(productTitle)

                let price = document.createElement("p")
                price.classList.add("price")
                price.innerHTML = produit.Prix + " ETH"
                productinfos.appendChild(price)

                let etherium = document.createElement("img")
                etherium.setAttribute("src", "../../../Public/Medias/Icons/Eth-Icon.png")
                etherium.setAttribute("alt", "Etherium Icon")
                etherium.classList.add("etherium")
                productinfos.appendChild(etherium)

                let rating = document.createElement("div")
                rating.classList.add("rating")
                products.appendChild(rating)

            })

        })

}