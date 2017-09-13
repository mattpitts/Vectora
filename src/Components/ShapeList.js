import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as shapeActions from '../actions/shapeActions';

class ShapeList extends React.Component {
	render() {
		console.log(this.props.shapes.shapes);
		let shapes = this.props.shapes.shapes.map((shape, i) => {
			if(shape.selected) {
				return <p
						className={'ShapeListSelected'}
						id={i}
						onClick={() => this.props.actions.selectShape(i)}
						>
						{shape.type}
					</p>
			} else {
				return <p id={i}
						onClick={() => this.props.actions.selectShape(i)}>{shape.type}
							</p>
			}
		});
		return (
			<div className={'ShapeList'}>
				{shapes}
			</div>

		)
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
