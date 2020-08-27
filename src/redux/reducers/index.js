import { combineReducers } from 'redux';

import pizzas from './pizzas.js';
import filters from './filters.js';
import cart from './cart.js';

const rootReducer = combineReducers({
	pizzas,
	filters,
	cart,
});

export default rootReducer;
