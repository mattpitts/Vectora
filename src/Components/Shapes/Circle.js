import React from 'react';

const Circle = (props) => {
	return (
		<circle
			id={props.id}
			cx={props.cx}
			cy={props.cy}
			r={props.r}
			fill={props.fill}
		/>
	)
}


export default Circle;
