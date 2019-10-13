const express = require("express");

const router = express.Router();

router.use("/:number", (req, res, next) => {
    
    range = !req.query.range ? 5000 : parseInt(req.query.range);
    positiveNumbers = [];
    if (req.params.number >= 0) {
        for (let i = req.params.number; i <= range; i++) {
            if (i % 2 === 0) {
                positiveNumbers.push(i);
            }
        }
        res.json({
            start: req.params.number,
            maxSafe: range,
            numbers: positiveNumbers
        });
    } else {
        res.json({
            message: "This number is not positive"
        });
    }
});

module.exports = router;