let score = 0;

// 0 is rock
// 1 is paper
// 2 is scissor

const whoWon = (playerChoice, whoAreYou) => {
    document.getElementById('player').className = ''
    document.getElementById('computer').className = ''

    /* 
         0 is rock
         1 is paper
         2 is scissor
         This array has already established the result.
         (0,0) means player chose rock and computer chose rock too. In which case its a tie.
    */
    const checker_arr = [
        ['Tie', 'Lost', 'Won'],
        ['Won', 'Tie', 'Lost'],
        ['Lost', 'Won', 'Tie']
    ];
    let message = 'Its a Tie'

    let computerChoice = Math.floor(Math.random() * 3);

    // Check if the player won or lose! By default its a tie
    if (checker_arr[playerChoice][computerChoice] === 'Won') {
        document.getElementById('score').innerHTML = `${score+=1}`;
        message = 'You Won!!!'
    } else if (checker_arr[playerChoice][computerChoice] === 'Lost') {
        if (score > 0) {
            document.getElementById('score').innerHTML = `${score-=1}`;
        }
        message = "You Lost!!!"
    }

    // Shows the result modal
    document.getElementById('modal-bg').classList.add('bg-active');

    document.getElementById('message').innerHTML = message;

    // styles the result modal
    document.getElementById('player').src = `./images/icon-${playerChoice}.svg`;
    document.getElementById('player').classList.add(whoAreYou);

    // styles the result modal 
    document.getElementById('computer').src = `./images/icon-${computerChoice}.svg`;
    switch (computerChoice) {
        case (0):
            document.getElementById('computer').classList.add('rock');
            break;
        case (1):
            document.getElementById('computer').classList.add('paper');
            break;
        case (2):
            document.getElementById('computer').classList.add('scissor');
            break;

    }



    return console.log(checker_arr[playerChoice][computerChoice]);
}