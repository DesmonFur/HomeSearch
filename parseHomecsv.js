const csvToJson = require('csvtojson')
const csvFolder = './assets/';
const fs = require('fs')



fs.readdirSync(csvFolder).forEach(file => {
    csvToJson().fromFile(`./assets/${file}`).then(json => {
        fs.writeFileSync("./server/data/homes.json", JSON.stringify(json), err => {
            if(err){
                console.log(err)
            }
        })
    })
});


