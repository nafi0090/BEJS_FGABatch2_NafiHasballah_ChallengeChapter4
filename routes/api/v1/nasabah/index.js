var express = require('express');
var router = express.Router();

const NASABAH_CONTROLLER = require('../../../../controllers/nasabah.controller');

router.get('/', NASABAH_CONTROLLER.index);

router.post('/create', NASABAH_CONTROLLER.createdata);

router.put('/update/:id', NASABAH_CONTROLLER.updatedata);

router.delete('/delete/:id', NASABAH_CONTROLLER.deletedata);

module.exports = router;