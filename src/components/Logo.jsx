import React from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(function Logo() {
	const logoImg = './img/pizza-logo.svg';

	return (
		<Link to="/">
			<div className="header__logo">
				<img width="38" src={logoImg} alt="Pizza logo" />
				<div>
					<h1>Pizza Hut</h1>
					<p>фигню не мутим!</p>
				</div>
			</div>
		</Link>
	);
});

export default Logo;
