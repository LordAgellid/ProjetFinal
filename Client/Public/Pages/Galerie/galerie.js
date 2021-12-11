window.onload = load

function load() {

    fetch("http://localhost:5000/Produits")
        .then(rep => {
            return rep.json()
        })
        .then(produits => {
            let galerie = document.getElementById('image-gallery')
            produits.forEach(produit => {
                let img = document.createElement("img")
                img.setAttribute("src", `../../../Public/Medias/Images/${produit.URL}`)
                img.setAttribute("alt", produit.Nom)
                galerie.appendChild(img)
            })
        })

}