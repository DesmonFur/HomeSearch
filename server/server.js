const express = require("express");
require("dotenv").config();
const app = express();
const homeCtrl = require("./controllers/homeController");
const { PORT } = process.env;


app.get("/api/home/address", homeCtrl.getByAddress);

app.listen(PORT, () => console.log(`Pikachu used thunderbolt on port ${PORT}!`));