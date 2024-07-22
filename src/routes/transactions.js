var express = require('express');
var router = express.Router();

let transactions = []

router.post('/', function(req, res,next) {
    const account = {
        id: transactions.length + 1,
        source_id: req.body.source_id,
        destination_id: req.body.destination_id,
        amount: req.body.amount,
    };
    transactions.push(account);
    res.status(201).json(transactions);
});

router.get('/', function(req, res, next) {
    res.json(transactions);
});

module.exports = router;
