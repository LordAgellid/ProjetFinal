function connexion(event) {

    event.preventDefault();

    let donneeFormulaire = new URLSearchParams(new FormData(event.target));

    const  error = document.getElementById("error");

    fetch("http://localhost:5000/Connexion", {
        method: "POST",
        body: donneeFormulaire
    })
    .then(rep => {
        return rep.json();
    })
    .then(repJson => {

        if(repJson.success) {
            window.location.href = "http://localhost:3000/Profil/" + repJson.username;
        }
        else {
            error.style.display = "block";
        }

    })
}