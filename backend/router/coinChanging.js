const express = require("express");
var currencyFormatter = require('currency-formatter');

const router = express.Router();
const TYPESMONEY = [
    500, 200, 100, 50, 20, 10, 5,
    2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01
];

getRest = (amount) => {
    rest = {};
    payoff = amount;
    for (let i = 0, counter = 0; i < TYPESMONEY.length; i++) {
        if (payoff.toFixed(2) >= TYPESMONEY[i] && payoff.toFixed(2) > 0) {
            counter++;
            payoff -= TYPESMONEY[i];
            rest[currencyFormatter.format(TYPESMONEY[i], { code: 'EUR' })] = counter;
            i--;
        } else {
            counter = 0;
        }
    }
    return rest;
};

router.use("/:amount", (req, res, next) => {
    amount = parseFloat(req.params.amount);
    expense = req.query.buy ? parseFloat(req.query.buy) : undefined;
    if (expense > amount) {
        res.json({
            message: "Insufficient credit!"
        });
    } 
    if (expense !== undefined ) {
        amount -= expense;
    }      
    res.json({
        amount: currencyFormatter.format(amount, { code: 'EUR' }),
        rest: getRest(amount),
        expense: currencyFormatter.format(expense, { code: 'EUR' })
    });
});




module.exports = router;