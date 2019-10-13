const express = require("express");

const router = express.Router();

const BETS = {
    WIN: "You won!",
    DRAW: "You drew!",
    LOST: "Game over!"
};

const CHOICES = {
    PAPER: "paper",
    ROCK: "rock",
    SCISSORS: "scissors"
};

// returns a random computer choice
getComputerChoice = () => {
    const keys = Object.keys(CHOICES);
    var choice = CHOICES[keys[keys.length * Math.random() << 0]];
    return choice
};

getResult = (pChoice, compChoice) => {
    var result;
    switch (pChoice) {
        case CHOICES.PAPER:
        result =
            compChoice === CHOICES.ROCK ? BETS.WIN
            : compChoice === pChoice ?  BETS.DRAW
            : BETS.LOST; 
        break;
        case CHOICES.ROCK:
        result =
            compChoice === CHOICES.SCISSORS ? BETS.WIN
            : compChoice === pChoice ?  BETS.DRAW
            : BETS.LOST; 
        break;
        case CHOICES.SCISSORS:
        result = 
            compChoice === CHOICES.PAPER ? BETS.WIN
            : compChoice === pChoice ?  BETS.DRAW
            : BETS.LOST; 
        break;
    }
    return result;
}

// Play of the player, the challenge result returns
router.use("/:playerChoice", (req, res, next) => {
    computerChoice = getComputerChoice();
    playerChoice = req.params.playerChoice
    res.status(200).json({
        playerChoice: playerChoice,
        computerChoice: computerChoice,
        result: getResult(playerChoice, computerChoice)
    });
});




module.exports = router;
