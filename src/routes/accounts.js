var express = require('express');
var router = express.Router();

let accounts = []

router.post('/', function(req, res,next) {
    const account = {
        id: accounts.length + 1,
        user_id: req.body.user_id,
        bank_name: req.body.bank_name,
        balance: req.body.balance,
    };
    accounts.push(account);
    res.status(201).json(accounts);
});

router.get('/', function(req, res, next) {
    res.json(accounts);
});

module.exports = router;
