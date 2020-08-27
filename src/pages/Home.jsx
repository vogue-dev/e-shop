import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, Sort, PizzaBlock, LoadingBlock } from '../components/index.js';
import { setCategory, setSortBy } from '../redux/actions/filters.js';
import { fetchPizzas } from '../redux/actions/pizzas.js';
import { addPizzaToCart } from '../redux/actions/cart.js';

const categoryNames = ['Мясные', 'Вегетарианские', 'Мясные', 'Гриль', 'Острые'];
const sortItems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
	const dispatch = useDispatch();
	const pizzas = useSelector(({ pizzas }) => pizzas.items);
	const pizzasInCart = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchPizzas(category, sortBy));
	}, [category, sortBy]); // !!!

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type));
	}, []);

	const handleAddPizzaToCart = React.useCallback((obj) => {
		dispatch(addPizzaToCart(obj));
	}, []);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategoryIndex={category}
					onClickCategory={onSelectCategory}
					categories={categoryNames}
				/>
				<Sort
					activeSortType={sortBy.type}
					onClickSortType={onSelectSortType}
					sortItems={sortItems}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? pizzas.map((pizza) => (
							<PizzaBlock
								key={pizza.id}
								onClickAtPizza={handleAddPizzaToCart}
								obj={pizza}
								addedPizzasCounter={pizzasInCart[pizza.id] && pizzasInCart[pizza.id].items.length}
								{...pizza}
							/>
					  ))
					: Array(10)
							.fill(0)
							.map((_, index) => <LoadingBlock key={index} />)}
			</div>
		</div>
	);
};

export default Home;
