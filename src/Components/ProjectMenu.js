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
					<p>Hi, {this.props.auth.username}</p>
					<div
						onClick={this.props.actions.authActions.logOut}
						className='auth-button'>
						Log Out
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
					<div className="saveOptions">
						<div
							onClick={this.props.actions.layoutActions.showUserProjectsModal}
							className='save-as'>Save</div>
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
		let newOption = <div
							className='saveOptions'
							onClick={this.props.actions.shapeActions.clearArtBoard}>New</div>
		let exportOption = <div
							className='saveOptions'
							onClick={this.props.actions.layoutActions.showCodeModal}>Export</div>
		return (
			<div className="ProjectMenuContainer">
				<div className='PropertyHeader'>
					<h4>Options</h4>
				</div>

				{saveOptions}
				{loadOptions}
				{newOption}
				{exportOption}
				{userInfo}
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
