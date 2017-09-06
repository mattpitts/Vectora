import React from 'react';

const Rect = (props) => {
	return (
		<rect
			x={props.x}
			y={props.y}
			rx={props.rx}
			ry={props.ry}
			width={props.width}
			height={props.height}
			fill={props.fill}
		/>
	)
}

export default Rect;
