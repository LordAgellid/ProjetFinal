function connexion(event) {

    event.preventDefault()

    let donneeFormulaire = new URLSearchParams(new FormData(event.target))

    const error = document.getElementById("error")

    fetch("http://localhost:5000/Connexion", {
        method: "POST",
        body: donneeFormulaire
    })
        .then(rep => {
            return rep.json()
        })
        .then(repJson => {

            if (repJson.success) {
                let url = new URL("http://localhost:3000/Profil/")
                url.searchParams.set("id", repJson.username)
                window.location.href = url
            }
            else {
                error.style.display = "block"
            }

        })
}