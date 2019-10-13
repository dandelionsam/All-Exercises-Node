const express = require("express");

const router = express.Router();

router.use("/:word", (req, res, next) => {
    const word = req.params.word;
    var isPalindrome = false;
    if(word.length % 2 === 0) {
        for (let min = 0, max = word.length - 1; min + 1 <= max; min++, max--) {
            if (isNaN(word[min]) || isNaN(word[max])) {
                return res.json({
                    message: "The string contains numeric values"
                });
            }
            if (word[min] === word[max]) {
                isPalindrome = true;
                continue;
            } else {
                isPalindrome = false;
                break;
            }
        }
    } else {
        for (let min = 0, max = word.length - 1; min !== max; min++, max--) {
            if (isNaN(word[min]) || isNaN(word[max])) {
                return res.json({
                    message: "The string contains numeric values"
                });
            }
            if (word[min] === word[max]) {
                isPalindrome = true;
                continue;
            } else {
                isPalindrome = false;
                break;
            }
        }
    }

    res.json({
        word: word,
        isPalindrome: isPalindrome
    });
    
});

module.exports = router;
