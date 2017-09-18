import React from 'react';
import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ProjectCard from './ProjectCard';
import * as authActions from '../actions/authActions';
import * as layoutActions from '../actions/layoutActions';
import * as shapeActions from '../actions/shapeActions';

// const API_URL = window.location.href === 'http://localhost:3001' ? 'http://localhost:3000/api/v1' : 'tbd';
const API_URL = 'http://localhost:3000/api/v1'
class UserProjects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: '',
			projects: false
		}
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onProjectClick = this.onProjectClick.bind(this);
	}
	onHandleChange(event) {
		this.setState({
			...this.state,
			[event.target.type]: event.target.value
		})
	}

	componentDidMount() {
		this.props.actions.shapeActions.setShapeDeletePermission(false);
		axios.get(`${API_URL}/${localStorage.userID}/projects`)
			.then(response => {
				this.setState({
					...this.state,
					projects: response.data
				});
			})
	}
	componentWillUnmount() {
		this.props.actions.shapeActions.setShapeDeletePermission(true);
	}
	onProjectClick(index) {
		console.log(this.state.projects[index]);
		setTimeout(() => {
			this.props.actions.shapeActions.loadProject(this.state.projects[index])
			this.props.actions.layoutActions.hideModal()
		}, 800);
	}
	render() {
		let projects;
		if(this.state.projects) {
			projects = this.state.projects.map((project, i) => {
				return (
						<ProjectCard
							name={project.name}
							id={i}
							key={i}
							onProjectClick={this.onProjectClick}
						/>
				)
			})
		}
		return (
			<div>
				<div className="project-modal">
					<div className="project-header">
						<h3>Projects</h3>
					</div>
					<div className="projects-container">
						{projects}
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
			layoutActions: bindActionCreators(layoutActions, dispatch),
			shapeActions: bindActionCreators(shapeActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
