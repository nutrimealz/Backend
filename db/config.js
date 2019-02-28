var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: "meals_users",
  user: process.env.DB_USER
};

var connection = pgInstance(config);

module.exports = connection;
