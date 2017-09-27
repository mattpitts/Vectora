import React from 'react';
import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ProjectCard from './ProjectCard';
import * as authActions from '../actions/authActions';
import * as layoutActions from '../actions/layoutActions';
import * as shapeActions from '../actions/shapeActions';

const API_URL = window.location.href === 'http://localhost:3001/' ? 'http://localhost:3000/api/v1' : 'https://vectorasvg.herokuapp.com/api/v1';

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
		axios.get(`${API_URL}/${localStorage.userID}/projects`, {
			headers: {
				'Authorization': `Bearer ${localStorage.token}`
				}
			}).then(response => {
				this.setState({
					...this.state,
					projects: response.data
				});
			}).catch(err => {
				console.log(err);
			})
	}
	componentWillUnmount() {
		this.props.actions.shapeActions.setShapeDeletePermission(true);
	}
	onProjectClick(index, action) {
		if(action === 'load') {
			setTimeout(() => {
				this.props.actions.shapeActions.loadProject(this.state.projects[index])
				this.props.actions.layoutActions.hideModal()
			}, 300);
		} else if(action === 'delete') {
			let projectID = this.state.projects[index]._id;
			axios.delete(`${API_URL}/${localStorage.userID}/projects/${projectID}`, {
				headers: {
					'Authorization': `Bearer ${localStorage.token}`
				}
			}).then(response => {
					let projects = [
						...this.state.projects.slice(0, index),
						...this.state.projects.slice(index+1, this.state.projects.length)
					]
					this.setState({
						projects
					})
				});
		}
	}
	render() {
		let projects;
		if(this.state.projects) {
			projects = this.state.projects.map((project, i) => {
				return (
						<ProjectCard
							name={project.name}
							shapes={project.shapes}
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
