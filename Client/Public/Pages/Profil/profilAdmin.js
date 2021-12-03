window.onload = load;

function load() {
    
    const params = new URLSearchParams(window.location.search);
    const user = params.get("id");

    fetch( "http://localhost:5000/Profil/" + user)
    .then(rep => {
        return rep.json();
    })
    .then(admin => {
        console.log(admin)
        
        //Administrator div container
        let  adminInfo = document.getElementById("admin-profile-infos");
        
        //Database variables
        let Nom = admin[0].Nom;
        let Prenom = admin[0].Prenom;
        let Username = admin[0].Username;
        let Courriel = admin[0].Courriel;

        //First name & last name info
        let h1 = document.createElement("h1");
        h1.setAttribute("id", "prenomNom");
        h1.innerHTML = Prenom + " " + Nom;
        adminInfo.appendChild(h1);

        //Username & e-mail info
        let p = document.createElement("p");
        p.setAttribute("id", "usernameCourriel");
        p.innerHTML = Username + " - " + Courriel;
        adminInfo.appendChild(p);
    })

}