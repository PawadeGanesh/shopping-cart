import React, { Component } from 'react';

class LoginForm extends Component {
	state = {
		username: '',
		password: '',
	};
	handleSignIn = (e) => {
		e.preventDefault();
		const username = this.state.username;
		console.log(username);
		const password = this.state.password;
		console.log(password);
		if (username && password) {
			localStorage.setItem('userName', username);
			this.props.history.push('/');
		}
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div
				className="container"
				style={{
					paddingTop: '45px',
					marginTop: '5%',
					paddingLeft: '20%',
					paddingBottom: '20px',
					backgroundColor: '#d5dcde',
					height: '100%',
					width: '100%',
				}}
			>
				<div>
					<h1 style={{ marginRight: '300px' }}>Login</h1>
					<form onSubmit={this.handleSignIn} style={{ marginTop: '15px' }}>
						<div className="form-group row">
							<label className="col-form-label">User Name: </label>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control"
									value={this.state.name}
									onChange={this.handleChange}
									name="username"
									placeholder="Enter user name"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-form-label">Password: </label>
							<div className="col-sm-6" style={{ marginLeft: '12px' }}>
								<input
									type="password"
									className="form-control"
									value={this.state.password}
									name="password"
									placeholder="Enter password"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-sm-10">
								<button type="submit" className="btn btn-primary" style={{ marginRight: '150px' }}>
									LogIn
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default LoginForm;
