'use strict';

// Vendor
import React from 'react';

export default class Counter extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<a
				className="waves-effect waves-light btn btn-large blue accent-1" 
				onClick={ this.props.onIncrementClick.bind(this) }>
					<i className="material-icons">add</i>
			</a>
		);
	}
};