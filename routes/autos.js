const express = require('express') //requiero express
const router = express.Router()
const autosControllers = require('../controller/autosController')

router.get('/', autosControllers.automoviles);
router.get('/:marcas', autosControllers.autosId);
router.get('/:marcas/:dato', autosControllers.datosAuto);

module.exports = router;