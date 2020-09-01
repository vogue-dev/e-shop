import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './scss/app.scss';

import { Header } from './components/index.js';
import { Home, Cart, Error404 } from './pages/index.js';

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={Cart} />
					<Route component={Error404} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
