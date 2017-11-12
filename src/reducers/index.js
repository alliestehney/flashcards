const INITIAL_STATE = {
	currentCardIndex:0,
	isFront: true,
	cards: [
		{front: "Grand Circus mascot", back: "Grant Chirpus"}, 
		{front: "Big 3 auto companies in Detroit", back: "Ford, GM, Chrysler"}, 
		{front: "Name of the new hockey/basketball arena in Detroit", back: "Little Caesars Arena"}, 
		{front: "The text editor that Allie uses", back: "Sublime"}, 
		{front: "This course is all about...", back: "Javascript!!!!"}, 
		{front: "Street that Grand Circus is located on", back: "Woodward"}
	]
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "NEXT":
			return Object.assign({}, state, {
				currentCardIndex: state.currentCardIndex + 1
			});

		case "PREV":
			return Object.assign({}, state, {
				currentCardIndex: state.currentCardIndex -1
			});

		case "FLIP":
			if (state.isFront) {
				return Object.assign({}, state, {
					isFront: false
				});
			} else {
				return Object.assign({}, state, {
					isFront: true
				});
			}

		case "SHUFFLE":

			const cardList = state.cards;
			const newCardList = cardList.map((card) => (
				card
			));
			
			var shuffledCards = [];

			// randomly select a card from that array and then remove it

			function randomCard(newCardList) {

				//grab a random card
				var random = newCardList[Math.floor(Math.random() * newCardList.length)];
			 	var itemToRemove = random;
			 	var index = newCardList.indexOf(itemToRemove);

			 	// add to new array
			 	shuffledCards.push(itemToRemove);
			 	

			 	// remove from first array (so you can grab other cards)
			 	newCardList.splice(index, 1);
			 	// for (var i=0; i<newCardList.length; i++) {
			 	// 	console.log(newCardList[i]);
			 	// }

			 	return newCardList;
			}

			randomCard(newCardList);
			randomCard(newCardList);
			randomCard(newCardList);
			randomCard(newCardList);
			randomCard(newCardList);
			randomCard(newCardList);

			console.log(shuffledCards);

			return Object.assign({}, state, {
				cards: shuffledCards
			});
		
			
		default:
			return state;	
		
	}
}