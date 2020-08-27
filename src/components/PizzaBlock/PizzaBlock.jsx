import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../index.js';

const PizzaBlock = ({
	id,
	name,
	imageUrl,
	price,
	types,
	sizes,
	onClickAtPizza,
	addedPizzasCounter,
}) => {
	const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(sizes[0]);
	const availableTypes = ['тонкое', 'традиционное'];
	const availableSizes = [25, 30, 35];

	const onSelectType = (index) => {
		setActiveType(index);
	};

	const onSelectSize = (size) => {
		setActiveSize(size);
	};

	const onClickAddPizza = () => {
		const obj = { id, name, imageUrl, price, size: activeSize, type: availableTypes[activeType] };
		onClickAtPizza(obj);
	};

	return (
		<div className="wrapper-for__pizza-block">
			<div className="pizza-block">
				<div className="pizza-block__wrapper">
					<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
					<h4 className="pizza-block__title">{name}</h4>
					<div className="pizza-block__selector">
						<ul>
							{availableTypes.map((type, index) => (
								<li
									className={classNames({
										active: activeType === index,
										disabled: !types.includes(index),
									})}
									key={type}
									onClick={() => onSelectType(index)}>
									{type}
								</li>
							))}
						</ul>
						<ul>
							{availableSizes.map((size, index) => (
								<li
									className={classNames({
										active: activeSize === size,
										disabled: !sizes.includes(size),
									})}
									key={size}
									onClick={() => onSelectSize(size)}>
									{size} см.
								</li>
							))}
						</ul>
					</div>
					<div className="pizza-block__bottom">
						<div className="pizza-block__price">от {price} ₽</div>
						<Button className="button--add" onClick={onClickAddPizza} outline>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
									fill="white"
								/>
							</svg>
							<span>Добавить</span>
							{addedPizzasCounter && <i>{addedPizzasCounter}</i>}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

PizzaBlock.propTypes = {
	name: PropTypes.string,
	imageUrl: PropTypes.string,
	price: PropTypes.number,
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	addedPizzasCounter: PropTypes.number,
};

PizzaBlock.defaultProps = {
	name: 'Название пиццы',
	imageUrl: 'https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif',
	price: 0,
	types: [],
	sizes: [],
	addedPizzasCounter: undefined,
};

export default PizzaBlock;
