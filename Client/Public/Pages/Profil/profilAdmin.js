window.onload = load;

function load() {

    let url = new URL("http://localhost:5000/Profils");
    // url.searchParams.set("x", value);


    fetch( url, {
        method: "GET",
        body: donneeFormulaire
    })
    .then(admin => {

        let  prenomNom = document.getElementById("admin-profile-infos");

        let Nom = admin.Nom;
        let Prenom = admin.Prenom;
        let Username = admin.Username;
        let Courriel = admin.Courriel;

        alert(prenomNom);
    })

}