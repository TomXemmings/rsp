function getComputerChoice(){
    var variants = ["Scissors", "Rock", "Paper"];
    if (Math.round(Math.random()) == 1){
        var a = Math.round(Math.random() + 1);
    } else {
        var a = Math.round(Math.random());
    }
    return variants[a];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return("Nobody wins!")
    } else {
        if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
            return("Player wins!")
        }
        if (playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Rock" && computerSelection == "Paper"){
            return("Computer wins!")
        }
    }
}

function rock(){
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    console.log ("Player:", playerSelection, " Computer:", computerSelection)
    game(playerSelection, computerSelection);
}

function paper(){
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    console.log ("Player:", playerSelection, " Computer:", computerSelection)
    game(playerSelection, computerSelection);
}

function scissors(){
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    console.log ("Player:", playerSelection, " Computer:", computerSelection)
    game(playerSelection, computerSelection);
}

var computer_points = 0
var player_points = 0
var round = 0

function game(playerSelection, computerSelection){
    console.log ("Round:", round)
    var result = playRound(playerSelection, computerSelection);
    console.log (result)
    if (result == "Computer wins!"){
        round += 1
        computer_points += 1
        alert("ROUND: " + round + "\nPlayer choose:" + playerSelection + " < Computer choose: " + computerSelection  + "\nComputer wins!" + "\nPlayer points: " + player_points + "\nComputer points: " + computer_points)
    } else if (result == "Player wins!"){
        round += 1
        player_points += 1
        alert("ROUND: " + round + "\nPlayer choose:" + playerSelection + " > Computer choose: " + computerSelection + "\nPlayer wins!" + "\nPlayer points: " + player_points + "\nComputer points: " + computer_points)
    } else {
        round += 1
        alert("ROUND: " + round + "\nPlayer choose:" + playerSelection + " = Computer choose: " + computerSelection + "\nNobody wins!" + "\nPlayer points: " + player_points + "\nComputer points: " + computer_points)
    }
    if (round == 5){
        if (computer_points > player_points){
            alert("Computer wins at game!" + "\nPlayer points: " + player_points + "\nComputer points: " + computer_points)
        } else if (computer_points < player_points){
            alert("Player wins at game!" + "\nPlayer points: " + player_points + "\nComputer points: " + computer_points)
        } else {
            alert("Nobody wins at game(" + "\nPlayer points: " + player_points + "\nComputer points: " + computer_points)
        }
        round = 0;
    }
}