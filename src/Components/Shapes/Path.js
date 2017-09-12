import React from 'react';

const Path = (props) => {
	return (
		<path
			id={props.id}
			d={props.d}
			fill={props.fill}
			stroke={props.stroke}
			strokeWidth={props.strokeWidth}
		/>
	)
}

export default Path;
