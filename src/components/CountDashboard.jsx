'use strict';

// Vendor
import React from 'react';
// Components
import Button from 'components/Button.jsx';

export default class CountDashboard extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div>
					Count: { this.props.count }<br />
				</div>
				<hr />
				<div>
					<Button { ...this.props } />
				</div>
			</div>
		);
	}
};
