import React from 'react';
import Circle from '../../Components/Shapes/Circle';
import Path from '../../Components/Shapes/Path';
import Rect from '../../Components/Shapes/Rect';
import ArtBoard from '../../Components/ArtBoard'

export default function constructor(shape, i, onShapeSelect) {
	// console.log('constructor');
	// console.log(onShapeSelect);
	// console.log(ArtBoard);
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
					onClick={()=>onShapeSelect('asdasd')}
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
					onClick={()=>onShapeSelect('asdasd')}
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
