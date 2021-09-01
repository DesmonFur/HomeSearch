const homes = require("../data/homes.json");

module.exports = {
    getByAddress(req, res) {
        const {address} = req.query
        const filteredHomes = homes.filter(home => home.ADDRESS.toLowerCase().includes(address.toLowerCase()))
        const resultArray = filteredHomes.map(home => ({
            City: home.CITY,
            State: home['STATE OR PROVINCE'],
            Address: home.ADDRESS,
            Price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home.PRICE),
            Property_type: home['PROPERTY TYPE'],
            Bedrooms: home.BEDS,
            Bathrooms: home.BATHS,
            Square_Footage: home['SQUARE FEET'],
            Year_Built: home['YEAR BUILT']
        }));
        res.status(200).send(resultArray)
    }
}