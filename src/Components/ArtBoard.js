import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Circle from './Shapes/Circle';
import Rect from './Shapes/Rect';
import Path from './Shapes/Path';
import * as shapeActions from '../actions/shapeActions';
import * as dragActions from '../actions/dragActions';

import utilities from '../scripts/utilities';
import shapeUtilities from '../scripts/shapes';
let area;
const fillerProps = {
	fill: 'red',
	stroke: 'black',
	strokeWidth: '9px'
};

class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lastClick: null,
			mouseDown: false
		}
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);

	}

	onMouseDown(event) {
		this.setState({
			mouseDown: true,
			lastClick: {x: event.clientX, y: event.clientY }
		})
	}

	onMouseUp(event) {
		this.setState({
			mouseDown: false,
			lastClick: null
		});
		if(this.props.newShape) {
			this.props.actions.shapeActions.finishShape(this.props.newShape);
		}
		if(this.props.drag.dragging) {
			this.props.actions.dragActions.finishDrag(this.props.drag.area);
		}
	}

	onMouseMove(event) {
		if(this.state.mouseDown) {
			if(!this.props.drag.dragging) {
				this.props.actions.dragActions.beginDrag(
					utilities.getDragArea(event.clientX, event.clientY)
				);
			} else {
				this.props.actions.dragActions.updateDrag(
					utilities.getDragArea(event.clientX, event.clientY, this.props.drag.area)
				);
				this.forceUpdate();
				console.log(this.props.drag);
			}
			if(!this.props.newShape && this.props.tool !== 'select') {
				let newShape = shapeUtilities[this.props.tool].create(this.props.drag.area, fillerProps);
				this.props.actions.shapeActions.createShape(newShape)
			} else {
				let updatedShape = shapeUtilities[this.props.tool].update(this.props.drag.area, this.props.newShape);
				this.props.actions.shapeActions.changeShape(updatedShape);
				this.forceUpdate();
			}
		}
	}

	render() {
		let newShape;
		if(this.props.newShape) {
			newShape = shapeUtilities.constructor(this.props.newShape,1);
		}
		let shapes = this.props.shapes.map((shape, i) => {
			return shapeUtilities.constructor(shape,i);
		})
		return (
			<div>
				<svg
					onMouseDown={(event) => this.onMouseDown(event)}
					onMouseUp={(event) => this.onMouseUp(event)}
					onMouseMove={(event) => this.onMouseMove(event)}
					className="ArtBoard">
					{shapes}
					{newShape}
				</svg>
			</div>

		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shapes: state.shapes.shapes,
		newShape: state.shapes.new,
		tool: state.toolbar,
		drag: state.drag
	};
};

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			shapeActions: bindActionCreators(shapeActions, dispatch),
			dragActions: bindActionCreators(dragActions, dispatch)
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ArtBoard);
