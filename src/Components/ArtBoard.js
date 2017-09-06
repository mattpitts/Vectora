import React from 'react';

import Circle from './Shapes/Circle';
import Rect from './Shapes/Rect';
import Path from './Shapes/Path';

import utilities from '../scripts/utilities';

let lastClick = {};

class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lastClick: {x:0, y:0},
		}
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.beginShapeDrag = this.beginShapeDrag.bind(this);
	}

	handleMouseDown(event) {
		// if(this.props.shape) {
		// 	this.beginShapeDrag(event.clientX, event.clientY);
		// }
		// this.setState({
		// 	lastClick: { x: event.clientX, y: event.clientY }
		// });
	}

	handleMouseUp(event) {
		// if(utilities.getDifference(event.clientX, this.state.lastClick.x) > 0 || utilities.getDifference(event.clientY, this.state.lastClick.y) > 0) {
		// 	console.log("drag");
		// } else {
		// 	console.log('click');
		// }
	}

	beginShapeDrag(x,y) {
		console.log('working');
	}

	render() {
		let shapes = this.props.shapes.map((shape, i) => {
			switch(shape.type) {
				case 'circle':
					return (
						<Circle
							key={i}
							cx={shape.cx}
							cy={shape.cy}
							r={shape.r}
							fill={shape.fill}
						/>
					)
				case 'rect':
					return (
						<Rect
							key={i}
							x={shape.x}
							y={shape.y}
							rx={shape.rx}
							ry={shape.ry}
							width={shape.width}
							height={shape.height}
							fill={shape.fill}
						/>
					)
				case 'path':
					return (
						<Path
							key={i}
							d={shape.d}
							fill={shape.fill}
							stroke={shape.stroke}
							strokeWidth={shape.strokeWidth}
						/>
					)
			}
		})
		return (
			<div>
				<svg
					onMouseDown={(event) => this.handleMouseDown(event)}
					onMouseUp={(event) => this.handleMouseUp(event)}
					className="ArtBoard">
					{shapes}
				</svg>
			</div>

		)
	}
}


export default ArtBoard;
