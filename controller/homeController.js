const fs = require('fs');
const db = './data/concesionarias.json';
let file=fs.readFileSync(db, 'utf-8')
let consecionarias = JSON.parse(file);

const homeControler = {
    bienvenida:(req, res)=>{
             
        res.write('-----------------------------------------------------------------\n')
        res.write('Bienvenidos a nuestra concesionaria!\n');
        res.write('-----------------------------------------------------------------\n\n')
        res.write('Nuestras sucursales son: \n\n');
        for(let consecionaria of consecionarias){
        res.write('* '+consecionaria.sucursal+'\n')
   
        }res.end()
        

    }
    

}
module.exports = homeControler;
