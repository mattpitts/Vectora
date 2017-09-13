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
	strokeWidth: 9
};
const pathFillerProps = {
	stroke: 'black',
	strokeWidth: 6,
	fill: 'none'
}

class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mouseDown: false
		}
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		if(event.target.id === "ArtBoard") {
			this.props.actions.shapeActions.unselectShapes();
		} else {
			this.props.actions.shapeActions.unselectShapes();
			this.props.actions.shapeActions.selectShape(event.target.id);
		}
	}

	onMouseDown(event) {
		this.setState({
			mouseDown: true
		})
		// console.log(event.target);
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
				if(this.props.selected) {
					this.props.actions.shapeActions.unselectShapes();
					this.forceUpdate();
				}
				this.props.actions.dragActions.updateDrag(
					utilities.getDragArea(event.clientX, event.clientY, this.props.drag.area)
				);
				this.forceUpdate();
			}
			if(!this.props.newShape) {
				if(this.props.tool === 'path') {
					this.props.actions.shapeActions.createShape(
							shapeUtilities['path'].create(event.clientX, event.clientY, this.props.properties)
					)
				} else {
					let newShape = shapeUtilities[this.props.tool].create(this.props.drag.area, this.props.properties);
					this.props.actions.shapeActions.createShape(newShape);
				}
			} else if(this.props.tool === 'path') {
				this.props.actions.shapeActions.changeShape(
					shapeUtilities[this.props.tool].update(event.clientX, event.clientY, this.props.newShape)
				)
			} else {
				let updatedShape = shapeUtilities[this.props.tool].update(this.props.drag.area, this.props.newShape);
				this.props.actions.shapeActions.changeShape(updatedShape);
				this.forceUpdate();
			}
		}
	}

	render() {
		let newShape;
		let dragBox;
		let selectedShape;
		if(this.props.drag.dragging && this.props.tool !== 'path') {
			dragBox = shapeUtilities.dragBox(this.props.drag.area);
		}
		if(this.props.newShape) {
			newShape = shapeUtilities.constructor(this.props.newShape,1);
		}
		let shapes = this.props.shapes.map((shape, i) => {
			if(!shape.selected) {
				return shapeUtilities.constructor(shape, i);
			} else {
				selectedShape = shapeUtilities.selectedConstructor(shape, i);
			}
		})
		// console.log(this.props.shapes);
		// console.log(shapes);
		return (
			<div>
				<svg
					id={'ArtBoard'}
					onMouseDown={(event) => this.onMouseDown(event)}
					onMouseUp={(event) => this.onMouseUp(event)}
					onMouseMove={(event) => this.onMouseMove(event)}
					onClick={(event) => this.onClick(event)}
					className="ArtBoard">
					{shapes}
					{newShape}
					{selectedShape}
					{dragBox}
				</svg>
			</div>

		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shapes: state.shapes.shapes,
		newShape: state.shapes.new,
		selected: state.shapes.selected,
		tool: state.toolbar,
		drag: state.drag,
		properties: state.properties
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
