

export default function flipCard(state, card) {
    // A card can only be flipped if it exists and the turn is not already over.
    if (!card || isTurnOver(state)) {
        return state;
    }

    // add this card to the list of flipped cards
    const flipped = state.flipped.slice(0);
    flipped.push(card);

    return Object.assign({}, state, {
        flipped: flipped
    });
}
