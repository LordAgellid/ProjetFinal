window.onload = load;

function load() {

    const params = new URLSearchParams(window.location.search);
    const image = params.get("id");

    fetch("http://localhost:5000/Produit/" + image)
        .then(rep => {
            return rep.json();
        })
        .then(produit => {
            console.log(produit)

            //Administrator div container
            let column1 = document.getElementById("column-1");

            //Database variables
            let Nom = produit.Nom;
            let Quantite = produit.Quantite;
            let Prix = produit.Prix;
            let Description = produit.Description;
            let URL = produit.URL;

            let img = document.createElement("img")
            img.setAttribute("src", "../../../Public/Medias/Images/" + URL);
            img.setAttribute("alt", Nom)
            img.classList.add("product-image")
            column1.appendChild(img)

            // //First name & last name info
            // let h1 = document.createElement("h1");
            // h1.setAttribute("id", "prenomNom");
            // h1.innerHTML = Prenom + " " + Nom;
            // adminInfo.appendChild(h1);

            // //Username & e-mail info
            // let p = document.createElement("p");
            // p.setAttribute("id", "usernameCourriel");
            // p.innerHTML = Username + " - " + Courriel;
            // adminInfo.appendChild(p);
        })