const express = require('express');
const router = express.router();
const USERS_CONTROLLER = require('controllers/users.controller.js');

router.use('/user', USERS_CONTROLLER);

module.exports = router;