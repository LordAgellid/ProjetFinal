let nbEssai = 3

function connexion(event) {

    event.preventDefault()
    console.log(event)

    let donneeFormulaire = new URLSearchParams(new FormData(event.target))

    const error = document.getElementById("error")

    const errorMessage = document.getElementById("errorMessage")



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
            else if (repJson.compteBloque) {
                errorMessage.innerHTML = repJson.erreur
                error.style.display = "block"
            }
            else if (!repJson.compteBloque) {
                nbEssai--
                if (nbEssai === 0) {
                    fetch('http://localhost:5000/bloquerAdmin/1', {
                        method: "POST"
                    })
                        .then(rep => {
                            errorMessage.innerHTML = 'Compte bloqué.'
                            return rep.json()
                        })
                } else {
                    errorMessage.innerHTML = `${repJson.erreur} ${nbEssai} essai(s)`
                    error.style.display = "block"
                }

            }

        })

}