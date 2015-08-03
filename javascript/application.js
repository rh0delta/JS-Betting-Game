function randomNum(){
	return Math.floor((Math.random() * 10) + 1);	
}


function bet(){
	var bet = prompt("How much would you like to bet?");
	document.getElementById("bet").textContent = bet;
	// console.log(bet);
	return bet;
	
}

function guessNum(){
	var guess = prompt("Guess a number between 1 and 10.");
	return guess

}

function timeToBet(){
	var num = randomNum(); // generates random number
	
	var userBet = bet();

	var guess = guessNum();

	var totalBet = document.getElementById("total_monies");
	var total = parseInt(totalBet.textContent);
	console.log(total);
	console.log(num);
	if (guess == num) {

		alert("Congrats! You've guessed correctly!");
		
		total += (userBet * 2);
		console.log(total);

	} else if (guess == num - 1 || guess === num + 1){

		alert("So Close! You were off by 1!");

	} else {

		alert("You were completely wrong! You should just give up on life!");
		total -= userBet;

	}
	
	totalBet.textContent = total;
	console.log(totalBet.textContent);
	
	if (parseInt(totalBet.textContent) === 0){
		alert("You have lost all your money! Goodbye!");

	}



}