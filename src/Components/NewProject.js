import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import * as layoutActions from '../actions/layoutActions';
import * as shapeActions from '../actions/shapeActions';

const API_URL = 'http://localhost:3000/api/v1'

class NewProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			status: '',
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
			name: event.target.value
		});
	}
	onSubmit() {
		this.setState({
			...this.state,
			status: 'Saving'
		})
		let project = {
			name: this.state.name,
			userID: localStorage.userID,
			shapes: this.props.shapes.shapes
		}
		axios.post(`${API_URL}/projects`, project)
			.then(response => {
				this.setState({
					...this.state,
					status: response.data.message
				})
				console.log(response);
				this.props.actions.shapeActions.setProjectId(response.data._id, response.data.name)
				setTimeout(() => {
					this.props.actions.layoutActions.hideModal();
				}, 2000)
			});
	}
	render() {
		return (
			<div className="save-project-modal">
				<div className="save-project-container">
					<h3>Save</h3>
					<form className="save-project-form">
						<input onChange={(event) => this.onHandleChange(event)} type="text" value={this.state.name} placeholder="Enter project name"></input>
					</form>
					<div onClick={this.onSubmit} className='save-new-submit'>Save Project</div>
					<p className="api-status">{this.state.status}</p>
				</div>
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
			layoutActions: bindActionCreators(layoutActions, dispatch),
			shapeActions: bindActionCreators(shapeActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
