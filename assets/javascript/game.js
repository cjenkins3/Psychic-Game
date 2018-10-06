var possible = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft;
var guessesMade;
var compLetter;

//Reset function so random generated letters can go back to default
resetVariables();

// users key input
document.onkeyup = function(event) {
	// stores user input from keyboard, lowercase letter only
	var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log ("usr: " + keyPressed);

	guessesLeft--;
	//console.log(guessesLeft);

	guessesMade.push(keyPressed);
	//console.log(guessesMade);

	//Determines win or loss
	if (keyPressed == compLetter) {
		wins++;
		resetVariables();
	} else {};	

	if (guessesLeft == 0){
		losses++;
		resetVariables();
	} else {};

	//text to be displayed
	var html = 
	"<p>Guess what letter I'm thinking of.</p>"+
	"<p>Wins: "+ wins + "</p>" +
	"<p>Losses:" + losses + "</p>"+ 
	"<p>Guesses Left: " +  guessesLeft + "</p>" +
	"<p>Guesses Made So Far: " +  guessesMade + "</p>";

	//when the user presses a key, update html with new results
	document.querySelector(".game").innerHTML = html;

};//END: document.onkeyup = function(event) 

//Reset function so random generated letters based on possible output guesses go back to default
function resetVariables(){
	guessesLeft = 9;
	guessesMade = [];
	compLetter = possible[Math.floor(Math.random()*possible.length)];
	console.log( "comp: " + compLetter);
};