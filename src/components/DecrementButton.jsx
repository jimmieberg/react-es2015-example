'use strict';

// Vendor
import React from 'react';

export default class Counter extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		let className = 'waves-effect waves-light btn btn-large deep-orange accent-1';

		if(this.props.count < 1) {
			className += ' ' + 'disabled';
		}

		return (
			<a className={ className } onClick={ this.props.onDecrementClick.bind(this) }>
				<i className="tiny material-icons">remove</i>
			</a>
		);
	}
};