import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as shapeActions from '../actions/shapeActions';

class ShapeList extends React.Component {
	render() {
		let selected = 'none';
		let shapes = this.props.shapes.shapes.map((shape, i) => {
			if(shape.selected) {
				selected = i;
				return <p
						key={i}
						className={'ShapeListSelected'}
						id={i}
						onClick={() => this.props.actions.selectShape(i)}
						>
						{convertShapeName(shape.type)}
					</p>
			} else {
				return <p
						key={i}
						id={i}
						onClick={() => this.props.actions.selectShape(i)}>{convertShapeName(shape.type)}
						</p>
			}
		});
		let icons;

		if(this.props.shapes.shapes.length > 1) {
			icons = (
				<div>
					<i
						onClick={() => this.props.actions.moveShapeForward(selected)}
						className="fa fa-arrow-down">
					</i>
					<i
						onClick={() => this.props.actions.moveShapeBackward(selected)}
						className="fa fa-arrow-up"></i>

				</div>
			)
		}
		return (
			<div className={'ShapeListContainer'}>
				<div className={'PropertyHeader ShapeListHeader'}>
					<h4>Layers</h4>
						{icons}

				</div>
				<div className={'ShapeList'}>

					{shapes}
				</div>

			</div>


		)
	}
}

function convertShapeName(type) {
	switch(type) {
		case 'rect':
			return 'Rectangle';
		case 'path':
			return 'Path';
		case 'circle':
			return 'Circle';
		case 'text':
			return 'Text';
		case 'ellipse':
			return 'Ellipse';
		default:
			return;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shapes: state.shapes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(shapeActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeList);
