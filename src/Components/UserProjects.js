import React from 'react';
import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ProjectCard from './ProjectCard';
import * as authActions from '../actions/authActions';
import * as layoutActions from '../actions/layoutActions';

// const API_URL = window.location.href === 'http://localhost:3001' ? 'http://localhost:3000/api/v1' : 'tbd';
const API_URL = 'http://localhost:3000/api/v1'
class UserProjects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ''
		}
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onHandleChange(event) {
		this.setState({
			...this.state,
			[event.target.type]: event.target.value
		})
	}

	componentDidMount() {
		axios.get(`${API_URL}/${localStorage.userID}/projects`)
			.then(response => {
				console.log(response);
			})
	}
	onSubmit() {

	}
	render() {
		return (
			<div>
				<div className="project-modal">
					<div className="project-header">
						<h3>Projects</h3>
					</div>
					<div className="projects-container">
						<ProjectCard
							name="poopoo"
						/>
					</div>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
	return {
		auth: state.auth,
		shapes: state.shapes
	}
}
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			authActions: bindActionCreators(authActions, dispatch),
			layoutActions: bindActionCreators(layoutActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
