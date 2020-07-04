const express = require('express')
const router = express.Router()
const autosControlers = require('../controller/autosControler.js')

router.get('/', autosControlers.index);
router.get('/:marcas', autosControlers.id);
router.get('/marcas/:dato', autosControlers.dato);

module.exports = router;