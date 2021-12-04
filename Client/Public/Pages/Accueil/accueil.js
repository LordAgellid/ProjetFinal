window.onload = load;

function load() {
    fetch("http://localhost:5000/Produits")
        .then(rep => {
            return rep.json();
        })
        .then(produits => {
            let div = document.getElementById('produits')

            produits.forEach(produit => {

                //     <div class="product">
                let products = document.createElement('div')
                products.classList.add("product");
                div.appendChild(products)

                //     <div class="product-image-container">
                let productImageContainer = document.createElement('div')
                productImageContainer.classList.add("product-image-container");
                products.appendChild(productImageContainer)

                //         <a href="#"><img class="product-image" src="../../../Public/Medias/Images/AMETHYST.png" alt="AMETHYST"></a>
                let lienProduit = document.createElement('a')
                lienProduit.href = 'http://localhost:3000/?id=' + produit.URL
                productImageContainer.appendChild(lienProduit)


                let img = document.createElement("img");
                img.setAttribute("src", "../../../Public/Medias/Images/" + produit.URL);
                img.setAttribute("alt", produit.Nom)
                img.classList.add("product-image")
                lienProduit.appendChild(img)

                //     <div class="product-infos">
                let productinfos = document.createElement('div')
                productinfos.classList.add("product-infos");
                products.appendChild(productinfos)

                //         <p class="product-title">AMETHYST</p>
                let productTitle = document.createElement('p')
                productTitle.classList.add("product-title")
                productTitle.innerHTML = produit.Nom
                productinfos.appendChild(productTitle)

                //         <p class="price">0.01 ETH</p>
                let price = document.createElement('p')
                price.classList.add("price")
                price.innerHTML = produit.Prix + " ETH"
                productinfos.appendChild(price)

                //     <div class="rating">
                let rating = document.createElement('div')
                rating.classList.add("rating");
                products.appendChild(rating)

            });
        })
}