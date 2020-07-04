const express = require('express');//requiero express
const app = express();//asigno una variable
//rutas requeridas
const rutaAutos = require('./routes/autos');
const rutaHome= require('./routes/home');
const rutaMarcas = require('./routes/marcas');
const rutaSucursales = require('./routes/sucursales');
//servidor
app.listen(3030, () =>{
    console.log('El server esta funcionando en el puerto 3030')
});
//metodo de express
app.use('/', rutaHome);