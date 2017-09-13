import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shapeActions from '../actions/shapeActions';
import * as propertiesActions from '../actions/propertiesActions';
import FillColor from './PropertiesComponents/FillColor';
import shapeUtilities from '../scripts/shapes';

class Properties extends React.Component {
	constructor(props) {
		super(props);
		this.onPropertyChange = this.onPropertyChange.bind(this);
	}

	onPropertyChange(property, value) {
		if(this.props.shapes.selected) {
			let id;
			this.props.shapes.shapes.forEach((shape, i) => {
				if(shape.selected) {
					id = i;
					return;
				}
			});
			this.props.actions.shapeActions.changeShapeProperty({ id, property, value })
		}
		this.props.actions.propertiesActions.changeProperty({ property, value });
	}
	render() {
		let selectedShape = shapeUtilities.getSelectedShape(this.props.shapes.shapes);
		let fill = selectedShape ? selectedShape.fill : this.props.properties.fill;
		return (
			<div>
				<FillColor
					onPropertyChange={this.onPropertyChange}
					fill={fill}
				/>
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
