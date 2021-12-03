window.onload = load;

function load() {

    let donneeFormulaire = new URLSearchParams(new FormData());

    fetch("http://localhost:5000/Connexion", {
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