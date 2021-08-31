const homes = require("../data/homes.json");

module.exports = {
    getByAddress(req, res) {
        const { address } = req.query
        const filtered = homes.filter(el => el.ADDRESS.toLowerCase().includes(address.toLowerCase()) )
        res.status(200).send( filtered ? filtered : [{}])
    }
}