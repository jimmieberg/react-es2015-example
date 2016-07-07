'use strict';

import { createStore } from 'redux'
import Index from 'views/Index.jsx';

// Reducers
function counter(state = { count: 0 }, action) {
	switch (action.type) {
		case 'INCREMENT':
			state.count = state.count + 1;
			return Object.assign({}, state);
		case 'DECREMENT':
			state.count = state.count + 1;
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