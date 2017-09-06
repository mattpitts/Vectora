import React from 'react';

const Circle = (props) => {
	return (
		<circle
			cx={props.cx}
			cy={props.cy}
			r={props.r}
			fill={props.fill}
		/>
	)
}


export default Circle;
