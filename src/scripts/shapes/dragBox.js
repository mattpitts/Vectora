import React from 'react';
import Rect from '../../Components/Shapes/Rect';

export default function dragBox(area) {
	return (
		<Rect
			className={'dragBox'}
			x={area.xMin}
			y={area.yMin}
			width={area.xMax - area.xMin}
			height={area.yMax - area.yMin}
			fill={"rgba(100,100,100,0.5)"}
			stroke={'blue'}
			strokeWidth={10}
		/>
	)
}


//"rgba(.2,.2,.2,.3)"
