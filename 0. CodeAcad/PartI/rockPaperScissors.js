// gets a random number 0,1, or 2
const getChoice = () => {
    let rand = Math.floor( Math.random() * 3 );

    return getPick(rand);
}

// validates input
const validateChoice = (e) => (e < 3) ? getPick(e) : "invalid";

// turns int to string
const getPick = (e) => {
    let pick;

    switch(e){
        case 0: pick = "rock"; break;
        case 1: pick = "paper"; break;
        case 2: pick = "scissors"; break;
        default: pick= "invalid"; break;
    }

    return pick;
}

// checks the picks to see round winner
const round = (comp, user) => {
    let winner;

    if (comp === user) {
        winner = "tie";
    } else if(user === "invalid") {
        winner = "try again";
    }else if (user === "rock") {
        winner = (comp === "scissors") ? "you" : "computer"  ;
    } else if (user == "paper") {
        winner = (comp === "rock") ? "you" : "computer"  ;
    // else if (user == "scissors") 
    } else {
        winner = (comp === "paper") ? "you" : "computer"  ;
    }

    console.log( `Winner: ${winner.toUpperCase()} \nComputer: ${comp}\nYou: ${user}` );
    return winner;
}

// plays the game
const playGame = (e) => {
    let comp = getChoice();
    let user = validateChoice(e);

    let round1 = round( comp, user );
    let round2 = round( getChoice(), getChoice() );
    let round3 = round( getChoice(), getChoice() );
}

// pick 0, 1, or 2
playGame(1);