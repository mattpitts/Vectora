import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shapeActions from '../actions/shapeActions';
import * as layoutActions from '../actions/layoutActions';
import * as authActions from '../actions/authActions';

class ProjectMenu extends React.Component {
	render() {
		let userInfo;
		if(this.props.auth.username) {
			userInfo =
				<div className='user-info'>
					<div
						onClick={this.props.actions.authActions.logOut}
						className='auth-button'>
						Logout
					</div>
				</div>
		} else {
			userInfo =
				<div className='user-info'>
						<div
							onClick={this.props.actions.layoutActions.showLoginModal}
							className='auth-button'>
							Log In
						</div>
						<div
							onClick={this.props.actions.layoutActions.showSignupModal}
							className='auth-button'>
							Sign Up
						</div>
				</div>
		}
		let saveOptions;
		let loadOptions;
		if(this.props.auth.username) {
			loadOptions =
				<div className="saveOptions">
					<div
						onClick={this.props.actions.layoutActions.showUserProjectsModal}
						className='save-as'>Load</div>
				</div>

			if(this.props.shapes.projectID) {
				saveOptions =
					<div className="save-options">
						<p>{this.props.shapes.projectName}</p>
						<div className='save'>Save</div>
					</div>
			} else {
				saveOptions =
					<div className="saveOptions">
						<div
							onClick={this.props.actions.layoutActions.showSaveNewProjectModal}
							className='save-as'>Save as...</div>
					</div>
			}
		}
		return (
			<div className="ProjectMenuContainer">
				{userInfo}
				{saveOptions}
				{loadOptions}
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shapes: state.shapes,
		auth: state.auth
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			shapeActions: bindActionCreators(shapeActions, dispatch),
			layoutActions: bindActionCreators(layoutActions, dispatch),
			authActions: bindActionCreators(authActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu);
