const express = require("express");

const router = express.Router();

router.use("", (req, res, next) => {
    var arrNumbers;
    var sum;
    if (req.body.constructor !== Object) {
        arrNumbers = req.body;
        sum = arrNumbers.reduce((previous, current) => current += previous);
        return res.json({
            numbers: arrNumbers,
            average: sum / arrNumbers.length
        });
    } 
    res.json({
        message: "Error"
    });
    
});

module.exports = router;
