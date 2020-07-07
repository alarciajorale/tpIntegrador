const fs = require('fs'); // requiero fs para trabajar con JSON
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')); //parseo el JSON

const autos = {
    automoviles: (req, res) => {
        res.write('-----------------------------------------------------------------\n')
        res.write('Disponemos de las siguientes marcas y modelos\n')
        res.write('-----------------------------------------------------------------\n')

        for(let conscionaria of concesionarias) {
            for(let auto of conscionaria.autos) {
        
                res.write('\nMarca: '+auto.marca+'\nModelo: '+auto.modelo+'\nAnio: '+auto.anio+'\nColor: '+auto.color+'\n');
                res.write('-----------------------------------------------------------------\n')

            }
        }
        res.end();

},
        autosId: (req, res) =>{
        let marcaId = req.params.marcas;
         res.write('-----------------------------------------------------------------\n')
        res.write('Disponemos de '+marcaId+' los siguientes modelos: \n')
        res.write('-----------------------------------------------------------------\n')
        for(let conscionaria of concesionarias) {
        for(let auto of conscionaria.autos) {
            if(marcaId === auto.marca){
            res.write('\nMarca: '+auto.marca+'\nModelo: '+auto.modelo+'\nAnio: '+auto.anio+'\nColor: '+auto.color+'\n');
            res.write('-----------------------------------------------------------------\n')
            }
            }
            
        } res.end()
    

},

        datosAuto:(req, res)=>{
          let marca = req.params.marcas;
          let datos = req.params.dato.split('/');
          let anio;
          console.log(marca, datos)
          for(let concesionaria of concesionarias){
              for(let auto of concesionaria.autos){
                 if(datos.length === 1 && 
                      marca === auto.marca && 
                      datos[0] === auto.anio) {
                                
                       res.write('marca: '+auto.marca+' año: '+auto.anio)
     }
        }    res.end()     
      }
          }
    
}  
module.exports = autos;
