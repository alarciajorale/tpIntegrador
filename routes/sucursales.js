const express = require('express');
const router = express.Router()
const sucursales = require('../controller/sucursalesController')

router.get('/', sucursales.todasSucursales)
router.get('/:sucursal', sucursales.buscarSucursal);
module.exports = router;
