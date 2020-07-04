const fs = require('fs'); // requiero fs para trabajar con JSON
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')); //parseo el JSON
const autos = {


};

module.exports = autos;