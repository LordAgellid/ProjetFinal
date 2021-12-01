window.onload = load;

function load(){
    console.log('he')
    fetch("http://localhost:5000/produits")
    .then(rep =>{
        return rep.json();
    })
    .then(produits =>{
        let galerie = document.getElementById('imageGallery')
        produits.forEach(produit => {
            let img = document.createElement("IMG");
            img.setAttribute("src", "../../../Public/Medias/Images/" + produit.URL);
            img.setAttribute("alt", produit.Nom);
            galerie.appendChild(img)
        });
    })
}
