import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as shapeActions from '../actions/shapeActions';

class ShapeList extends React.Component {
	render() {
		let shapes = this.props.shapes.shapes.map((shape, i) => {
			if(shape.selected) {
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
		return (
			<div className={'ShapeListContainer'}>
				<div className={'PropertyHeader'}>
					<h4>Shapes</h4>
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
