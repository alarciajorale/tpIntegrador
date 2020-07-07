const fs = require('fs');
const db = './data/concesionarias.json';
let file=fs.readFileSync(db, 'utf-8')
let consecionarias = JSON.parse(file);

const marcas = {
    buscarMarca:(req,res)=>{
        let marcas=[];
        for(let consecionaria of consecionarias){
            for(let auto of consecionaria.autos){
                let existe=marcas.indexOf(auto.marca)
                if(existe===-1){
                    marcas.push(auto.marca)
                }
            }
        }      
        res.write('-----------------------------------------------------------------\n')
        res.write('Puede encontrar autos de las siguientes marcas:\n ')
        res.write('-----------------------------------------------------------------\n\n')
        marcas.forEach(function(marca){
            res.write('* Marca: '+ marca+'\n')
        })
        res.end()
    },
    obtenerAutoMarca: (req, res) => {
        let autos = []
        let marcaId = req.params.marca;
        res.write('-----------------------------------------------------------------\n')
         res.write('Los modelos de ' + marcaId + ' disponibles son: \n')
         res.write('-----------------------------------------------------------------\n')
        for(let conscionaria of consecionarias) {
            for(let auto of conscionaria.autos) {
                if(marcaId === auto.marca){
                autos.push(auto)
                res.write('\n*'+'\nMarca: '+auto.marca+'\nModelo: '+auto.modelo+'\nAnio: '+auto.anio+'\n');
                res.write('-----------------------------------------------------------------\n')
                }
                
            }
        }res.end('Lo sentimos no tenemos stock de '+marcaId);
        
    }

    }


module.exports = marcas;