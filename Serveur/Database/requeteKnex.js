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

/*----------------------------------- EXPORTING FUNCTIONS -----------------------------------*/

module.exports = {
  afficherAdmins,
  afficherProduits,
  afficherUnAdmin,
  afficherUnProduit
};