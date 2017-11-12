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
          <div className="FlashControls">
          		<PrevButton className="directionBtns" />
              <Card />
              <NextButton className="directionBtns"/>
          </div>
      		<FlipButton />
          <Shuffle />
      </div>
    );
  }
}

export default App;
