var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match");
	}
	else
		alert("sorry try again");
};

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId])
	if (cardsInPlay.length === 2){
		checkForMatch()
	}
	
	else{
		console.log("keep flipping");
	} 
};

flipCard(0);

flipCard(2);

