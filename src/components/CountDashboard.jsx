'use strict';

// Vendor
import React from 'react';
// Components
import IncrementButton from 'components/IncrementButton.jsx';
import DecrementButton from 'components/DecrementButton.jsx';
import ClickListItem from 'components/ClickListItem.jsx';

export default class CountDashboard extends React.Component {
	
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		Materialize.showStaggeredList(this.refs.clicksList);
	}

	render() {

		var Clicks = this.props.clicks.map((click, i) => 
			<ClickListItem key={ i } click={ click } />
		);

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col m7">
							<div className="card blue-grey darken-1">
								<div className="card-content white-text">
									<span className="card-title">What is this?</span>
									<p>A small counter app created with React, Redux & Materialize.</p>
								</div>
								<div className="card-action">
									<a href="https://github.com/jimmieberg/react-es2015-example" target="__new_tab__">
										GitHub repo
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col m12">
							<div className="section">
								<div className="card">
									<div className="card-content valign center">
										<span className="card-title">Counter</span>
										<h1>{ this.props.count }</h1>	
									</div>
									<div className="card-action">
										<div className="row">
											<div className="col m6">
												<div className="section">
													<IncrementButton { ...this.props } />
												</div>
											</div>
											<div className="col m6 right-align">
												<div className="section">
													<DecrementButton { ...this.props } />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col m12">
							<h5>Log</h5>
							<div className="section">
								{ Clicks }
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
