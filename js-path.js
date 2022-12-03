let playerScore = 0;
let compScore =0;
let roundNum;

function getComputerChoice()
{
     let choices = ["rock", "paper", "scissors"];
     return choices[Math.floor(Math.random() * choices.length)];
}



function playRound(computerSelection, playerSelection)
{

    let result = " ";
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    for(roundNum =0; roundNum < 5; roundNum++)
    {
        playerSelection = prompt("Make your choice:")
        computerSelection;

        if(computerSelection == "rock")
        {
            if(playerSelection == "paper")
            {
                playerScore+=1;
                result = ("You win. paper beats rock." + 
                 "<br><br>player Score: " + playerScore + "<br><br> computer Score: " + compScore);
            }
            else if(playerSelection == "scissors")
            {
                compScore+=1;
                result = ("You lose. rock beats scissors" + 
                 "<br><br>player Score: " + playerScore + "<br><br> computer Score: " + compScore);
            }
            else
            {
                result = "Tie. You both chose rock."
                result = "<br><br>Player Score: " + playerScore  + "<br><br>computer Score: " + compScore;
            }

        }

        if(computerSelection == "scissors")
        {
            if(playerSelection == "rock")
            {
                playerScore+=1;
                result = ("You win. rock beats scissors." + 
                 "<br><br>player Score: " + playerScore + "<br><br> computer Score: " + compScore);
            }
            else if(playerSelection == "paper")
            {
                compScore+=1;
                result = ("You lose. scissors beats paper" + 
                 "<br><br>player Score: " + playerScore + "<br><br> computer Score: " + compScore);
            }
            else
            {
                result = "Tie. You both chose scissors."
                result = "<br><br>Player Score: " + playerScore  + "<br><br>computer Score: " + compScore;
            }

        }

        if(computerSelection == "paper")
        {
            if(playerSelection == "scissors")
            {
                playerScore+=1;
                result = ("You win. scissors beats paper." + 
                 "<br><br>player Score: " + playerScore + "<br><br> computer Score: " + compScore);
            }
            else if(playerSelection == "rock")
            {
                compScore+=1;
                result = ("You lose. paper beats rock" + 
                 "<br><br>player Score: " + playerScore + "<br><br> computer Score: " + compScore);
            }
            else
            {
                result = "Tie. You both chose paper."
                result = "<br><br>Player Score: " + playerScore  + "<br><br>computer Score: " + compScore;
            }

        }
          

    }

    if (roundNum == 5)
    {
        if(compScore > playerScore)
        {
            result = ("You lost the game. Better luck next time.");
        }
        else if (compScore < playerScore)
        {
            result = (" You won the game. Congratulations!");
        }
        else
        {
            result = ("No winner. Both you and the computer tie.")
        }
    }



   
  

}

