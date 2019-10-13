const express = require("express");

const router = express.Router();

router.use("/:number", (req, res, next) => {
    const number = req.params.number;

    if (number % 1 === 0 && number % number === 0 && number !== 2 && number > 0) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return res.json({
                    number: number,
                    isPrime: false
                });
            }
        }
        return res.json({
            number: number,
            isPrime: true
        });
    }
    res.json({
        number: number,
        isPrime: false
    });
});

module.exports = router;
