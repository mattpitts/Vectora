import React from 'react';
import Circle from '../../Components/Shapes/Circle';
import Path from '../../Components/Shapes/Path';
import Rect from '../../Components/Shapes/Rect';

export default function constructor(shape, i) {
	switch(shape.type) {
		case 'circle':
			return (
				<Circle
					id={i.toString()}
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
					id={i.toString()}
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
					id={i.toString()}
					key={i}
					d={shape.d}
					fill={shape.fill}
					stroke={shape.stroke}
					strokeWidth={shape.strokeWidth}
				/>
			)
	}
}
