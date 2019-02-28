var db = require("../db/config");
var bcrypt = require("bcrypt");
var user = {};
user.login = (req, res, next) => {
  db.one("SELECT * FROM users WHERE email = $1;", [req.body.email])
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password, result.password)) {
        req.user = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE email=$1;", [req.body.email])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.findAdmin = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE is_admin=$1;", [req.body.is_admin])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};
user.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  db.one(
    "INSERT INTO users (name , email, password) VALUES($1, $2 , $3 ) RETURNING *;",
    [
      req.body.name.toLowerCase(),
      req.body.email.toLowerCase(),
      bcrypt.hashSync(req.body.password, salt),
    ]
  )
    .then(function(result) {
      console.log(result)
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};




module.exports = user;
