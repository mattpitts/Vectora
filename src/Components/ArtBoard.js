import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Circle from './Shapes/Circle';
import Rect from './Shapes/Rect';
import Path from './Shapes/Path';
import * as shapeActions from '../actions/shapeActions';

import utilities from '../scripts/utilities';
import shapeUtilities from '../scripts/shapes';

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
			this.props.actions.finishShape(this.props.newShape);
		}
	}

	onMouseMove(event) {
		if(this.state.mouseDown) {
			if(!this.props.newShape) {
				let newShape = shapeUtilities[this.props.tool].create(event.clientX, event.clientY, fillerProps);
				this.props.actions.createShape(newShape)
			} else {
				let updatedShape = shapeUtilities[this.props.tool].update(event.clientX, event.clientY, this.props.newShape);
				this.props.actions.changeShape(updatedShape);
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
		tool: state.toolbar
	};
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(shapeActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ArtBoard);
