'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
// Components
import CountDashboard from 'components/CountDashboard.jsx';

// View
const Index = {
	init: function(elementId, store) {
		ReactDOM.render(
			<Provider store={store}>
				<div>
					<CountDashboardContainer />
				</div>
			</Provider>,
			document.getElementById(elementId)
		);
	}
};

const getCountStats = (count) => {
	return { 
		count: count
	};
}

const mapStateToProps = (state) => {
	return getCountStats(state.count);
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementClick: () => {
			dispatch({ type: 'INCREMENT' })
		}
	}
}

const CountDashboardContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(CountDashboard);

export default Index;