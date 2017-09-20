import React from 'react';
import Circle from '../../Components/Shapes/Circle';
import Path from '../../Components/Shapes/Path';
import Rect from '../../Components/Shapes/Rect';
import Ellipse from '../../Components/Shapes/Ellipse';
import Text from '../../Components/Shapes/Text';

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
					stroke={shape.stroke}
					strokeWidth={shape.strokeWidth}
				/>
			)
			case 'ellipse':
				return (
					<Ellipse
						id={i.toString()}
						key={i}
						cx={shape.cx}
						cy={shape.cy}
						rx={shape.rx}
						ry={shape.ry}
						fill={shape.fill}
						stroke={shape.stroke}
						strokeWidth={shape.strokeWidth}
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
					stroke={shape.stroke}
					strokeWidth={shape.strokeWidth}
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
					translate={shape.translate}
					scale={shape.scale}
				/>
			)
		case 'text':
			return (
				<Text
					id={i.toString}
					key={i}
					x={shape.x}
					y={shape.y}
					content={shape.content}
					fontFamily={shape.font}
					fontSize={shape.fontSize}
					fill={shape.fill}
					stroke={shape.stroke}
					selected={shape.selected}
				/>
			)
		default:
			console.log('Invalid shape type');
	}
}
