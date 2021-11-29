function connexion(event) {
    event.preventDefault();
    let donneeFormulaire = new URLSearchParams(new FormData(event.target));

    fetch("http://localhost:5000/connexion", {method: "POST", body: donneeFormulaire})
        .then(rep =>{
            return rep.json();
        })
        .then(repJson =>{
            if (repJson.success){
                window.location.href = "http://localhost:3000/profilAdmin"
            }else{
                alert(repJson.erreur)
            }
        })
}