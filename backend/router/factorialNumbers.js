const express = require("express");

const router = express.Router();

router.use("/:number", (req, res, next) => {
    var number = parseInt(req.params.number);
    let prod = 1;

    while(number > 0 && number < 5000){
        prod = prod * number;
        number = number - 1;
    }

    res.json({
        number: parseInt(req.params.number),
        factorial: prod
    });
});

module.exports = router;