const express = require("express");
require("dotenv").config();
const app = express();
const { PORT, } = process.env;


app.get('/', (req, res) => {
    res.send('texting here');
});

app.listen(PORT, () => console.log(`Pikachu used thunderbolt on port ${PORT}!`));