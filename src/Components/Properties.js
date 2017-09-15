import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shapeActions from '../actions/shapeActions';
import * as propertiesActions from '../actions/propertiesActions';
import Fill from './PropertiesComponents/Fill';
import Stroke from './PropertiesComponents/Stroke';
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
		return (
			<div className={'PropertiesContainer'}>
				{selectedShape && <Fill
					onPropertyChange={this.onPropertyChange}
					fill={selectedShape.fill}
				/>}
				{selectedShape && <Stroke
					onPropertyChange={this.onPropertyChange}
					stroke={selectedShape.stroke}
					strokeWidth={selectedShape.strokeWidth}
					toggleShapeDeletePermission={this.props.actions.shapeActions.toggleShapeDeletePermission}
				/>}
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
