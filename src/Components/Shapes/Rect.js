import React from 'react';

const Rect = (props) => {
	return (
		<rect
			id={props.id}
			x={props.x}
			y={props.y}
			rx={props.rx}
			ry={props.ry}
			width={props.width}
			height={props.height}
			fill={props.fill}
			stroke={props.stroke}
			strokeWidth={props.strokeWidth}
			strokeDasharray={props.strokeDasharray}
			fillOpacity={props.fillOpacity}
		/>
	)
}

export default Rect;
