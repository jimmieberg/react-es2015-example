'use strict';

// Vendor
import React from 'react';

export default class ClickListItem extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		Materialize.showStaggeredList(this.refs.me);
	}

	render() {

		return (
			<ul id="test" ref="me">
				<li style={{ opacity: 0 }}>
					<div className={ "chip white-text " + this.props.click.colorClass }>
						{ this.props.click.time.toString() } { this.props.click.type }
					</div>
				</li>
			</ul>
		);
	}

}