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
      		<Card />
          <PrevButton />
      		<FlipButton />
          <Shuffle />
          <NextButton />
      </div>
    );
  }
}

export default App;
