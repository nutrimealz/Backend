require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const port = process.env.DEV_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const authController = require("./controllers/authController");
app.use("/api/", authController);

app.listen(port, function() {
  console.log("---------------------------------------");
  console.log("Express listening on localhost:" + port);
  console.log("---------------------------------------");
});
