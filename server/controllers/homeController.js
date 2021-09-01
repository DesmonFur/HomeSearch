const homes = require("../data/homes.json");

module.exports = {
    getByAddress(req, res) {
        const {address} = req.query
        const filteredHomes = homes.filter(home => home.ADDRESS.toLowerCase().includes(address.toLowerCase()))
        console.log(filteredHomes)
        const resultArray = filteredHomes.map(home => ({
            City: home.CITY,
            State: home['STATE OR PROVINCE'],
            Address: home.ADDRESS,
            Price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home.PRICE),
            Property_type: home['PROPERTY TYPE'],
            Bedrooms: home.BEDS,
            Bathrooms: home.BATHS,
            Square_Footage: home['SQUARE FEET'],
            Year_Built: home['YEAR BUILT'],
            Home_Url:  Object.values(home[`URL (SEE http://www`].redfin)[0]
        }));
        res.status(200).send(resultArray)
    }
}