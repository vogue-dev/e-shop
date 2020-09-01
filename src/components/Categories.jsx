import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({
	activeCategoryIndex,
	categories,
	onClickCategory,
}) {
	return (
		<div className="categories">
			<ul>
				<li
					className={activeCategoryIndex === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}>
					Все
				</li>
				{categories &&
					categories.map((category, index) => (
						<li
							className={activeCategoryIndex === index ? 'active' : ''}
							onClick={() => onClickCategory(index)}
							key={`${category}_${index}`}>
							{' '}
							{category}
						</li>
					))}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	// activeCategoryIndex: PropTypes.oneOf([PropTypes.number, null]),
	categories: PropTypes.arrayOf(PropTypes.string),
};

Categories.defaultProps = {
	activeCategoryIndex: null,
	categories: [],
};

export default Categories;
