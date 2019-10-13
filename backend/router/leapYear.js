const express = require("express");

const router = express.Router();

isLeapYear = (year) => {
    if (year % 400 === 0 || (year % 100 !== 0) && (year % 4 === 0)) {
        return null
    }
    return false;
}
router.use("/:year", (req, res, next) => {
    const year = req.params.year;
    if (year.length === 4) {
        res.json({
            year: year,
            message: isLeapYear(year) === null ? "Leap Year" : "Not Leap Year"
        });
    } else {
        res.send("Error");
    }
});



module.exports = router;
