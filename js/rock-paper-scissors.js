function computerPlay() {
	switch(Math.floor(Math.random()*3)) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
	}
}
		
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let outcome;
	switch(playerSelection) {
		case "rock":
		switch(computerSelection) {
			case "rock": return 0;
			case "paper": return -1;
			case "scissors": return 1;
		} 
		case "paper":
		switch(computerSelection) {
			case "rock": return 1;
			case "paper": return 0;
			case "scissors": return -1;
		} 
		case "scissors":
		switch(computerSelection) {
			case "rock": return -1;
			case "paper": return 1;
			case "scissors": return 0;
		} 
				
	}
			

}
		
function game() {
	let playerScore = 0;
	let computerScore = 0;
	for(let i = 0; i < 5; ++i) {
		let playerSelection = prompt("Pick your weapon[rock/paper/scissors]");
		let computerSelection = computerPlay();
				
			
	switch(playRound(playerSelection, computerSelection)) {
		case 1: console.log("You win! "+playerSelection+" beats "+computerSelection+"."); playerScore++; break;
		case -1: console.log("You lose! "+playerSelection+" loses to "+computerSelection+"."); computerScore++; break;
		case 0: console.log("It's a draw. ");
	}
	console.log("Results: "+playerScore+":"+computerScore);
	}
	if(playerScore > computerScore) {
		console.log("You win the game.");
	} else if( playerScore < computerScore) {
		console.log("You lose the game.");
	} else {
		console.log("It's a draw.");
	}
}
		
game();
