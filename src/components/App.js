import React, { Component } from 'react';
import Card from './Card.js';
import FlipButton from './FlipButton';
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import Shuffle from './ShuffleButton';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Allie's Flashcards App!</h1>
          <div className="FlashControls">
          		<PrevButton className="directionBtns" />
              <Card />
              <NextButton className="directionBtns"/>
          </div>
          <div className="OtherButtons">
              <Shuffle />
          		<FlipButton />
          </div>
      </div>
    );
  }
}

export default App;
