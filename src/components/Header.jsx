import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect, withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const Header = ({ itemList }) => {
	const history = useHistory();

	const userName = localStorage.getItem('userName');
	const isLoginPage = window.location.pathname === '/';
	if (userName && isLoginPage) {
		return <Redirect to="/main" />;
	}
	if (!userName && !isLoginPage) {
		return <Redirect to="/" />;
	}

	const handleLogout = () => {
		localStorage.removeItem('userName');
		history.push('/');
	};

	return (
		<div>
			{userName && (
				<Navbar style={{ backgroundColor: '#d5dcde' }} light expand="sm">
					<div className="container">
						<NavbarBrand href="/main">
							<b>Gani's Shop</b>
						</NavbarBrand>
						<span style={{ float: 'right' }}>
							{userName && <strong>Welcome, {userName}</strong>}
							<button
								type="button"
								className="btn btn-primary right ml-3"
								onClick={() => {
									history.push('/cart');
								}}
							>
								Cart
								<span className="badge badge-light ml-3">{itemList.length}</span>
							</button>
							<button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={handleLogout}>
								SignOut
							</button>
						</span>
					</div>
				</Navbar>
			)}
		</div>
	);
};

export default withRouter(connect((state) => ({ itemList: state.cartReducer.addedItems }))(Header));
