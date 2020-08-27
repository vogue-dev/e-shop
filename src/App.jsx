import React from 'react';
import { Route } from 'react-router-dom';

import './scss/app.scss';

import { Header } from './components/index.js';
import { Home, Cart, Error404 } from './pages/index.js';

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} exact />
				<Route component={Error404} />
			</div>
		</div>
	);
};

export default App;
