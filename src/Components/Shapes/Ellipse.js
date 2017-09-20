import React from 'react';

const Ellipse = (props) => {
	return (
		<ellipse
			id={props.id}
			cx={props.cx}
			cy={props.cy}
			rx={props.rx}
			ry={props.ry}
			fill={props.fill}
			stroke={props.stroke}
			strokeWidth={props.strokeWidth}
		/>
	)
}


export default Ellipse;
