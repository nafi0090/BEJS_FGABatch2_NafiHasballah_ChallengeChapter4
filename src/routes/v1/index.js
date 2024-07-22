const express = require('express');
const router = express.router();
const USER_ROUTER = require('./user/index');

route.use('/user', USER_ROUTER);

module.exports = router;