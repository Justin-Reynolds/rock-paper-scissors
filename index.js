
// Execute the game
game();

// The game
function game() {

    // Set initial game settings
    let userRoundsWon = 0;
    let computerRoundsWon = 0;

    // Query user for amount of rounds to play
    let numRounds = prompt("How many rounds would you like to play? ");

    // Play the round
    for (numRounds; numRounds > 0; numRounds--) {
        // Determine player choices
        let userChoice = getUserChoice();
        let computerChoice = getRandomChoice();
        console.log(`User chooses ${userChoice}, Computer chooses ${computerChoice}!`)

        // Determine result
        let result = playRound(userChoice, computerChoice);

        // Update respective RoundsWon
        if (result === 'tie') {
            // Neither player won the round
            console.log('Tie round!');
        }else if (result === 'user') {
            console.log('User wins round!')
            userRoundsWon++;
        } else {
            console.log('Computer wins round!')
            computerRoundsWon++;
        }
    }

    // Game is over, show results
    console.log('Game Over!')
    console.log(`User: ${userRoundsWon} Computer: ${computerRoundsWon}`);
}

function playRound(userChoice, computerChoice) {

    // Tie Round
    if (userChoice === computerChoice) {
        return 'tie';
    }

    // If user selected 'rock', they win only if computer chose 'scissors'
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return "user"
        } else {
            return "computer"
        }
    }

   // If user selected 'paper', they win only if computer chose 'rock'
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return "user"
        } else {
            return "computer"
        }
    }

   // If user selected 'scissors', they win only if computer chose 'paper'
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return "user"
        } else {
            return "computer"
        }
    }
}

function getUserChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissors: ");
    let possibleChoices = getAllChoices();
    if (possibleChoices.includes(userChoice)) {
        return userChoice;
    }else {
        getUserChoice();
    }
}

function getRandomChoice() {
    let allChoices = getAllChoices();
    return allChoices[Math.floor(Math.random() * allChoices.length)];
}

function getAllChoices() {
    let allChoices = ['rock', 'paper', 'scissors'];
    return allChoices;
}