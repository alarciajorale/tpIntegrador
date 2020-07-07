const fs = require('fs');
const db = './data/concesionarias.json';
let file=fs.readFileSync(db, 'utf-8')
let consecionarias = JSON.parse(file);

const sucursales = {
    todasSucursales:(req, res)=>{
        res.write('-----------------------------------------------------------------\n')
        res.write('Nuestras Sucursales\n')
        res.write('-----------------------------------------------------------------\n')
        for(let consecionaria of consecionarias){
              res.write('\n*'+'Nombre: ' + consecionaria.sucursal + '\nDireccion: ' + consecionaria.direccion + '\nTelefono: '+ consecionaria.telefono+'\n')
         }
         res.end()
    },

    buscarSucursal:(req, res)=>{
        let nombreSucursal = req.params.sucursal
        res.write('-----------------------------------------------------------------\n')
        res.write('Sucursal de '+nombreSucursal+'\n')
        res.write('-----------------------------------------------------------------\n')
        consecionarias.forEach(function(consecionaria){
            if(nombreSucursal == consecionaria.sucursal){
                res.write('\n*'+'Nombre: ' + consecionaria.sucursal + '\nDireccion: ' + consecionaria.direccion + '\nTelefono: '+ consecionaria.telefono+'\n')
                res.write('-----------------------------------------------------------------\n')
                consecionaria.autos.forEach(function(veiculos){
                    res.write('\n*'+'Marca: '+ veiculos.marca+'\nModelo: '+veiculos.modelo+'\nAnio: '+veiculos.anio+'\nColor: '+veiculos.color+'\n')
                }
                )
                res.end();
            }

        });
        res.end("No se encontro la sucursal que indicas")
        
    }  

}

module.exports = sucursales;