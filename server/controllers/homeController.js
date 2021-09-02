const csvToJson = require("csvtojson");
const csvFolder = "./assets";
const fs = require("fs");

fs.readdirSync(csvFolder).forEach((file) => {
  csvToJson()
    .fromFile(`./assets/${file}`)
    .then((json) => {
      fs.writeFileSync(
        "./server/data/homes.json",
        JSON.stringify(json),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    });
});

module.exports = {
  getByAddress(req, res) {
    const homes = require("../data/homes.json");
    const { address } = req.query;
    const filteredHomes = homes.filter((home) =>
      home.ADDRESS.toLowerCase().includes(address.toLowerCase())
    );
    const resultArray = filteredHomes.map((home) => ({
      City: home.CITY,
      State: home["STATE OR PROVINCE"],
      Address: home.ADDRESS,
      Price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(home.PRICE),
      Property_type: home["PROPERTY TYPE"],
      Bedrooms: home.BEDS,
      Bathrooms: home.BATHS,
      Square_Footage: home["SQUARE FEET"],
      Year_Built: home["YEAR BUILT"],
      Home_Url: Object.values(home[`URL (SEE http://www`].redfin)[0],
    }));
    res.status(200).send(resultArray);
  },
};
