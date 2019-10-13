const express = require("express");

const router = express.Router();

router.use("", (req, res, next) => {
    arr = [];
    if (req.body.constructor !== Object) {
        arr = req.body;
        var asc = false;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            const nextElement = arr[i + 1];
            if (nextElement === undefined) {
                break;
            }
            if (element <= nextElement) {
                asc = true;
                continue;
                
            } else if (element >= nextElement && asc !== true || nextElement === undefined) {
                continue;
            } else {
                return res.json({
                    message: "The array is not ordered"
                });
            }
        }
        res.json({
            message: asc === true
                     ? "Array is ordered in ascending order" 
                     : "Array is ordered in descending order"
        });
    } else {
        res.json({
            message: "Array not insert!"
        });
    }
});

module.exports = router;
