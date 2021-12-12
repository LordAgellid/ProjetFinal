const path = require("path")

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "Database.sqlite"),
  },
  useNullAsDefault: false,
});

/*----------------------------------- FUNCTIONS -----------------------------------*/

function afficherAdmins() {
  return knex("Administrateurs")
}

function afficherProduits() {
  return knex("Produits")
}

function afficherUnAdmin(admin) {
  return knex("Administrateurs")
    .select("Nom", "Prenom", "Username", "Courriel")
    .where({ Username: admin })
}

function afficherUnProduit(produit) {
  return knex("Produits")
    .select("Nom", "Quantite", "Prix", "Description", "URL")
    .where({ Identifiant: produit })
}

function bloquerAdmin(trueOrFalse) {
  return knex('Administrateurs')
  .where('Username', '=', "martinc")
  .update({CompteBloque: trueOrFalse})
}

function modifierTable(id,rangee){
  return knex('Produits')
  .where('Identifiant', '=', id)
  .update(rangee)
}

/*----------------------------------- EXPORTING FUNCTIONS -----------------------------------*/

module.exports = {
  afficherAdmins,
  afficherProduits,
  afficherUnAdmin,
  afficherUnProduit,
  bloquerAdmin,
  modifierTable
}