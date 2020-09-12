import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantity, subtractQuantity, removeItem } from '../actions/index';
import Total from './TotalCost';

const Cart = ({ itemList, addQuantity, subtractQuantity, removeItem }) => {
	const handleAddQuantity = (id) => {
		addQuantity(id);
	};

	const handleSubtractQuantity = (id) => {
		subtractQuantity(id);
	};

	const handleRemove = (id) => {
		removeItem(id);
	};
	return (
		<React.Fragment>
			<div className="mt-5">
				<h3>Your Order is: </h3>
			</div>

			<div className="container mt-5">
				<ul className="collection">
					{itemList &&
						itemList.map((item) => {
							console.log(item.quantity);
							return (
								<li className="collection-item avatar" key={item.id}>
									<div className="item-img">
										<img src={item.img} alt={item.img} />
									</div>

									<div className="item-desc">
										<span className="title">{item.title}</span>

										<p>
											<b>Price: {item.price}Rs</b>
										</p>
										<p>
											<b>Quantity: {item.quantity}</b>
										</p>
										<div className="add-remove">
											<Link to="/cart">
												<button
													className="btn btn-success mr-1"
													onClick={() => {
														handleAddQuantity(item.id);
													}}
												>
													+
												</button>
											</Link>
											<Link to="/cart">
												<button
													className="btn btn-danger ml-1"
													onClick={() => {
														handleSubtractQuantity(item.id);
													}}
												>
													-
												</button>
											</Link>
										</div>
										<br />
										<button
											className="btn btn-warning"
											onClick={() => {
												handleRemove(item.id);
											}}
										>
											Remove
										</button>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
			<div>
				<Total />
			</div>
		</React.Fragment>
	);
};

export default connect((state) => ({ itemList: state.cartReducer.addedItems }), {
	addQuantity,
	subtractQuantity,
	removeItem,
})(Cart);
