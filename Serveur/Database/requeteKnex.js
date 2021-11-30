const path = require("path");

const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "Database.sqlite"),
    },
    useNullAsDefault: false,
  });

/*----------------------------------- FUNCTIONS -----------------------------------*/

  function afficherAdmins() {
      return knex("Administrateurs");
  }
  
/*----------------------------------- EXPORTING FUNCTIONS -----------------------------------*/

module.exports = {
  afficherAdmins
};