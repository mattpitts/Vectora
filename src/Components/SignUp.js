import React from 'react';
import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import * as authActions from '../actions/authActions';
import * as layoutActions from '../actions/layoutActions';
import * as shapeActions from '../actions/shapeActions';

const API_URL = window.location.href === 'http://localhost:3001/' ? 'http://localhost:3000/api/v1' : 'https://vectorasvg.herokuapp.com/api/v1';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			text: '',
			status: ''
		}
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		this.props.actions.shapeActions.setShapeDeletePermission(false);
	}
	componentWillUnmount() {
		this.props.actions.shapeActions.setShapeDeletePermission(true);
	}
	onHandleChange(event) {
		this.setState({
			...this.state,
			[event.target.type]: event.target.value
		})
	}
	onSubmit() {
		this.setState({
			...this.state,
			status: 'fetching'
		})
		axios.post(`${API_URL}/auth/signup`, {
			username: this.state.text,
			email: this.state.email,
			password: this.state.password
		}).then(
			response => {
				console.log(response);
				this.setState({
					...this.state,
					status: response.data.message
				})
				localStorage.token = response.data.token;
				localStorage.username = response.data.username;
				localStorage.userID = response.data.userID;
				this.props.actions.authActions.loginSuccess(response.data.username);

				setTimeout(() => {
					this.props.actions.layoutActions.hideModal();
				}, 1000)
			}
		).catch(
			error => {
				console.log('error');
			}
		)
	}
	render() {
		return (
			<div>
				<div className="modal">
					<div className="login-container">
						<h3>Sign Up</h3>
						<form className="login-form">
							<input
								onFocus={() => this.props.actions.shapeActions.setShapeDeletePermission(false)}
								onBlur={() => this.props.actions.shapeActions.setShapeDeletePermission(true)}
								onChange={(event) => this.onHandleChange(event)}
								type="text" value={this.state.username}
								placeholder="Enter username">
							</input>
							<input
								onFocus={() => this.props.actions.shapeActions.setShapeDeletePermission(false)}
								onBlur={() => this.props.actions.shapeActions.setShapeDeletePermission(true)}
								onChange={(event) => this.onHandleChange(event)}
								type="email" value={this.state.email}
								placeholder="Enter email">
							</input>
							<input
								onFocus={() => this.props.actions.shapeActions.setShapeDeletePermission(false)}
								onBlur={() => this.props.actions.shapeActions.setShapeDeletePermission(true)}
								onChange={(event) => this.onHandleChange(event)}
								type="password" value={this.state.password}
								placeholder="Enter password"></input>
						</form>
						<div onClick={this.onSubmit} className='login-submit'>Submit</div>
						<p className="api-status">{this.state.status}</p>

					</div>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
	return {
		auth: state.auth
	}
}
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			authActions: bindActionCreators(authActions, dispatch),
			layoutActions: bindActionCreators(layoutActions, dispatch),
			shapeActions: bindActionCreators(shapeActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
