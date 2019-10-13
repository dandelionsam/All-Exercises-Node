const express = require("express");

const router = express.Router();


router.use("/:word", (req, res, next) => {
    const word = req.params.word
    var letters = "";
    var number = "";
    if (isNaN(parseInt(word))) {
        letters = word;
        for (let i = 0; i < word.length; i++) {
            if (isNaN(word[i])) {
                number = number.concat(word[i].charCodeAt(0) - 97);
            }
        }
    } else {
        number = word;
        for (let i = 0; i < word.length; i++) {
            if (!isNaN(word[i])) {
                if(word[i] + word[i + 1] >= 10) {
                    letters = letters.concat(String.fromCharCode(97 + parseInt(word[i].concat(word[i + 1]))));
                    i++;
                } else {
                    letters = letters.concat(String.fromCharCode(97 + parseInt(word[i])));
                }
            }
        }
    }
    res.json({
        letters: letters,
        number: number
    });
});




module.exports = router;
