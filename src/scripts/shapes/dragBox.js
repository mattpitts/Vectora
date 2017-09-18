import React from 'react';
import Rect from '../../Components/Shapes/Rect';

export default function dragBox(area) {
	let width = area.xMax - area.xMin >= 0 ? area.xMax - area.xMin : 1;
	let height = area.yMax - area.yMin >= 0 ? area.yMax - area.yMin : 1;
	return (
		<Rect
			className={'dragBox'}
			x={area.xMin}
			y={area.yMin}
			width={width}
			height={height}
			fill={"rgba(100,100,100,0.5)"}
			stroke={'blue'}
			strokeWidth={1}
		/>
	)
}
