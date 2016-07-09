'use strict';

// Vendor
import React from 'react';
// Components
import IncrementButton from 'components/IncrementButton.jsx';
import DecrementButton from 'components/DecrementButton.jsx';

export default class CountDashboard extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col s12">
							<div className="section">
								Current count: { this.props.count }
							</div>
							<div className="section">
								<div className="divider"></div>
							</div>
						</div>
						<div className="section">
							<div className="col m6">
								<IncrementButton { ...this.props } />
							</div>
							<div className="col m6 right-align">
								<DecrementButton { ...this.props } />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
