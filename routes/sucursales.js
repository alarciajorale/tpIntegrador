const express = require('express');
const router = express.Router()
const sucursales = require('../controler/sucursalesControler')

router.get('/', sucursalesControler.index)
router.get('/:id', sucursalesControler.id);
module.exports = router;