'use strict';

import { createStore } from 'redux'
import Index from 'views/Index.jsx';

var initialState  = {
	count: 0,
	clicks: []
}

// Reducers
function counter(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			state.count = state.count + 1;
			state.clicks.push({ type: 'increment', time: new Date(), colorClass: 'blue accent-1' });
			return Object.assign({}, state);
		case 'DECREMENT':
			state.count = state.count > 0 ? state.count - 1 : state.count;
			state.clicks.push({ type: 'decrement', time: new Date(), colorClass: 'deep-orange accent-1' });
			return Object.assign({}, state);
		default:
			return state;
	}
}

// Create store
let store = createStore(counter);

store.subscribe(() =>
	console.log(store.getState())
);

Index.init('content', store);