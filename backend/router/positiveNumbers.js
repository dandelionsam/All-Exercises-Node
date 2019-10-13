const express = require("express");

const router = express.Router();

router.use("/:number", (req, res, next) => {
    
    range = req.query.range === undefined ? 5000 : req.query.range;
    positiveNumbers = [];
    sum = 0;

    if (req.params.number >= 0) {
        for (let i = req.params.number; i <= range; i++) {
            if (i % 2 === 0) {
                positiveNumbers.push(i);
                sum += i;
            }
        }
        res.json({
            start: req.params.number,
            maxSafe: range,
            numbers: positiveNumbers,
            avg: sum / positiveNumbers.length
        });
    } else {
        res.json({
            message: "This number is not positive"
        });
    }
});

module.exports = router;