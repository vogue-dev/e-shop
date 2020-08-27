import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
	return (
		<div className="wrapper-for__pizza-block">
			<div className="pizza-block">
				<div className="pizza-block__wrapper">
					<ContentLoader
						speed={2}
						width={294}
						height={522}
						viewBox="0 0 294 522"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb">
						<circle cx="147" cy="147" r="147" />
						<rect x="0" y="366" rx="10" ry="10" width="294" height="92" />
						<rect x="-2" y="313" rx="10" ry="10" width="294" height="30" />
						<rect x="0" y="482" rx="10" ry="10" width="92" height="30" />
						<rect x="138" y="474" rx="20" ry="20" width="152" height="46" />
					</ContentLoader>
				</div>
			</div>
		</div>
	);
}

export default LoadingBlock;
