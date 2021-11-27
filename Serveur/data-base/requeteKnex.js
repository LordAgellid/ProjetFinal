const path = require("path")
const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "database.sqlite"),
    },
    useNullAsDefault: false,
  });

  function tableTableProfil(){
      return knex("profil");
  }
  


module.exports = {tableTableProfil};