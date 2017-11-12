import React, { Component } from 'react';
import { shuffle } from '../actions';
import { connect } from 'react-redux';

class Shuffle extends Component {

	render() {

		return(
			<button onClick={this.props.shuffle} className="ShuffleButton">Shuffle Cards
			</button>
		);

	}
}

const mapActionsToProps = {
	shuffle: shuffle
}

export default connect(null, mapActionsToProps)(Shuffle);