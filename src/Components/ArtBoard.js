import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Circle from './Shapes/Circle';
import Rect from './Shapes/Rect';
import Path from './Shapes/Path';
import Ellipse from './Shapes/Ellipse';
import LogIn from './LogIn';

import KeyboardControls from './KeyboardControls';
import * as shapeActions from '../actions/shapeActions';
import * as dragActions from '../actions/dragActions';

import utilities from '../scripts/utilities';
import shapeUtilities from '../scripts/shapes';

class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mouseDown: false,
			nodeDrag: false,
			draggingShape: false
		}
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onClick = this.onClick.bind(this);
	}



	onClick(event) {
		if(this.props.tool === 'text') {
			let newText = shapeUtilities.text.create({x: event.clientX, y: event.clientY}, this.props.properties.text);
			this.props.actions.shapeActions.createTextField(newText);
		}
		else if(!event.target.id) {
			return;
		}
		else if(event.target.id === "ArtBoard" && !this.state.nodeDrag && this.props.tool !== 'text') {
			this.props.actions.shapeActions.unselectShapes();
		} else if(!this.state.nodeDrag) {
			this.props.actions.shapeActions.unselectShapes();
			this.props.actions.shapeActions.selectShape(event.target.id);
		}
	}

	onMouseDown(event) {
		//if a bounding box drag node has been selected
		if(isNaN(event.target.id) && event.target.id !== 'ArtBoard') {
			this.setState({
				mouseDown: true,
				nodeDrag: event.target.id
			})
			this.forceUpdate();
		//If a shape is being dragged around
		} else if(!isNaN(event.target.id) && this.props.selected && shapeUtilities.getSelectedIndex(this.props.shapes) == event.target.id){
			let initialBox = Object.assign({}, {...this.props.shapes[event.target.id].boundingBox})
			this.setState({
				...this.state,
				mouseDown: true,
				draggingShape: {
					initialCoords: {
						x: event.clientX,
						y: event.clientY
					},
					initialBox
				}
			})
			this.forceUpdate();
		} else {
			this.setState({
				...this.state,
				mouseDown: true
			})
		}
		// console.log(event.target);
	}

	onMouseUp(event) {
		this.setState({
			...this.state,
			mouseDown: false,
			nodeDrag: false,
			draggingShape: false
		});
		if(this.props.newShape) {
			this.props.actions.shapeActions.finishShape(this.props.newShape);
		}
		if(this.props.drag.dragging) {
			this.props.actions.dragActions.finishDrag(this.props.drag.area);
		}
	}

	onMouseMove(event) {
		if(this.state.draggingShape) {
			let selectedShape = shapeUtilities.getSelectedShape(this.props.shapes);
			selectedShape = shapeUtilities.moveShapeBoundingBox(selectedShape, event.clientX, event.clientY, this.state.draggingShape.initialCoords, this.state.draggingShape.initialBox)
			shapeUtilities.matchShapeToBoundingBox(selectedShape);
			this.props.actions.shapeActions.resizeShape(selectedShape);
			this.forceUpdate();
		}
		if(this.state.mouseDown && !this.state.nodeDrag && !this.state.draggingShape && this.props.tool !== 'text') {
			if(!this.props.drag.dragging) {
				this.props.actions.dragActions.beginDrag(
					utilities.getDragArea(event.clientX, event.clientY)
				);
				this.forceUpdate();
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
					shapeUtilities[this.props.tool].update(
						event.clientX,
						event.clientY,
						this.props.newShape
					)
				)
			} else {
				let updatedShape = shapeUtilities[this.props.tool].update(this.props.drag.area, this.props.newShape);
				this.props.actions.shapeActions.changeShape(updatedShape);
				this.forceUpdate();
			}
		}
		if(this.state.nodeDrag) {
			let selectedShape = shapeUtilities.getSelectedShape(this.props.shapes);
			selectedShape = shapeUtilities.resizeShape(selectedShape, event.clientX, event.clientY, this.state.nodeDrag);
			shapeUtilities.matchShapeToBoundingBox(selectedShape);
			let index = shapeUtilities.getSelectedIndex(this.props.shapes)
			this.props.actions.shapeActions.resizeShape({selectedShape, index})
			this.forceUpdate();
			// selectedShape = shapeUtilities.matchShapeToBoundingBox(selectedShape);
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
			newShape = shapeUtilities.constructor(this.props.newShape,10000);
		}
		let shapes = this.props.shapes.map((shape, i) => {
			if(!shape.selected) {
				return shapeUtilities.constructor(shape, i);
			} else if(shape.type !== 'text'){
				selectedShape = shapeUtilities.selectedConstructor(shape, i);
				return;
			}
		});
		return (
			<div>
				<KeyboardControls actions={this.props.actions}/>
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
		properties: state.properties,
		layout: state.layout
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
