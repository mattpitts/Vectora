import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shapeActions from '../actions/shapeActions';
import * as propertiesActions from '../actions/propertiesActions';
import FillColor from './PropertiesComponents/FillColor';

class Properties extends React.Component {
	render() {
		return (
			<div>
				<FillColor selectFillColor={this.props.actions.shapeActions.selectFillColor}/>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shapes: state.shapes,
		properties: state.properties
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			shapeActions: bindActionCreators(shapeActions, dispatch),
			propertiesActions: bindActionCreators(propertiesActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
