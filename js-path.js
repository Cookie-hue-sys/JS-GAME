
let playerScore = 0;
let compScore =0;
let roundNum;

function getComputerChoice()
{
     let choices = ["rock", "paper", "scissors"];
     return choices[Math.floor(Math.random() * choices.length)]; // picks a random index from the array length and then gives the value assigned to that index.
}
//console.log(getComputerChoice());



function playRound(computerSelection, playerSelection)
{
   

    if(computerSelection === "rock")
    {
        if(playerSelection === "paper")
        {
            playerScore+=1;
            return("You win. paper beats rock." + 
             "\nplayer Score: " + playerScore + "\n computer Score: " + compScore);
        }
        else if(playerSelection === "scissors")
        {
            compScore+=1;
            return("You lose. rock beats scissors" + 
             "\nplayer Score: " + playerScore + "\n computer Score: " + compScore);
        }
        else
        {
            return("Tie. You both chose rock.\nPlayer Score: " + playerScore  + "\ncomputer Score: " + compScore);
        }

    }

    if(computerSelection == "scissors")
    {
        if(playerSelection == "rock")
        {
            playerScore+=1;
            return("You win. rock beats scissors." + 
             "\nplayer Score: " + playerScore + "\n computer Score: " + compScore);
        }
        else if(playerSelection == "paper")
        {
            compScore+=1;
            return("You lose. scissors beats paper" + 
             "\nplayer Score: " + playerScore + "\n computer Score: " + compScore);
        }
        else
        {
            return( "Tie. You both chose scissors. \nPlayer Score: " + playerScore  + "\ncomputer Score: " + compScore);
        }

    }

    if(computerSelection === "paper")
    {
        if(playerSelection == "scissors")
        {
            playerScore+=1;
            return("You win. scissors beats paper." + 
             "\nplayer Score: " + playerScore + "\n computer Score: " + compScore);
        }
        else if(playerSelection == "rock")
        {
            compScore+=1;
            return("You lose. paper beats rock" + 
             "\nplayer Score: " + playerScore + "\n computer Score: " + compScore);
        }
        else
        {
            return "Tie. You both chose paper. \nPlayer Score: " + playerScore  + "\ncomputer Score: " + compScore;
        }

}
} //playerSelection = prompt("Make your choice:")
const computerSelection = getComputerChoice(); //calls the getComputerChoice function to know the value the computer has chosen
//console.log(playRound(playerSelection, computerSelection));

function game(){
    for(roundNum =1; roundNum <= 5; roundNum++) //plays the game for 5 rounds
    {
        playerSelection = prompt("Make your choice:")
        playRound();
        console.log(playRound(playerSelection, computerSelection));

        if (roundNum == 5) // looks at the end of the 5 rounds to determine overall winner.
    {
        if(compScore > playerScore)
        {
            return "You lost the game. Better luck next time.";
        }
        else if (compScore < playerScore)
        {
            return " You won the game. Congratulations!";
        }
        else
        {
            return "No winner. Both you and the computer tie.";
        }
    }
    }
}
console.log(game());