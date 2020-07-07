const express = require('express');
const router = express.Router();
const marcasController = require('../controller/marcasController');

router.get('/', marcasController.buscarMarca);
router.get('/:marca', marcasController.obtenerAutoMarca);

module.exports = router;