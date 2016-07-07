'use strict';

// Vendor
import React from 'react';

export default class Counter extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<button onClick={ this.props.onIncrementClick.bind(this) }>
					Click me! 
				</button>
			</div>
		);
	}
};