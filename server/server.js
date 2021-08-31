const express = require("express");
require("dotenv").config();
const app = express();
const homeCtrl = require("./controllers/homeController");
const { SERVER_PORT  } = process.env;



app.get("/api/home/address", homeCtrl.getByAddress);

app.listen(SERVER_PORT, () => console.log(`Pikachu used thunderbolt on port ${SERVER_PORT}!`));