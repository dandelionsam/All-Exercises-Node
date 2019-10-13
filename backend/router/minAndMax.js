const express = require("express");

const router = express.Router();

router.use("", (req, res, next) => {
    var max;
    var min;
    arrNumbers = req.body;
    if(req.body.constructor !== Object) {
        max = Math.max.apply(null, arrNumbers);
        min = Math.min.apply(null, arrNumbers);
    } else {
        res.json({
            message: "This is not an array"
        });
    }

    res.json({
        array: arrNumbers,
        max: !isNaN(max) 
             ? max
             : "This value is a string",
        min: !isNaN(max)
             ? min
             : "This value is a string"
    });
});

module.exports = router;
