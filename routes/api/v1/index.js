const express = require('express');
const router = express.Router();
const NASABAH_ROUTER = require('./nasabah');
// const AUTH_MIDDLEWARE = require('../../../middlewares/auth.middleware');

router.use('/nasabah', NASABAH_ROUTER);

module.exports = router;
