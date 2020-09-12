import React, { lazy, Suspense } from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const Header = lazy(() => import('./components/Header'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Cart = lazy(() => import('./components/Cart'));
const LoginForm = lazy(() => import('./components/Login'));
const Loader = () => <div className="page-loader">Loading...</div>;

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<Loader />}>
					<Header />
					<Switch>
						<Route exact path="/" component={LoginForm} />
						<Route exact path="/main" component={Dashboard} />
						<Route exact path="/cart" component={Cart} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
