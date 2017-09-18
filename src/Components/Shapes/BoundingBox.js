import React from 'react';
import Rect from './Rect';
const miniBoxSize = '6px'
const miniBoxNum = 6;

const BoundingBox = (props) => {
	return (
		<g>
			<Rect
				key={1}
				fill={'none'}
				width={props.xMax - props.xMin > 0 ? props.xMax - props.xMin : 0}
				height={props.yMax - props.yMin > 0 ? props.yMax - props.yMin : 0}
				x={props.xMin}
				y={props.yMin}
				stroke={'gray'}
				strokeWidth={'1px'}
				strokeDasharray={'8 15'}
				fillOpacity={'0'}
			/>
			<rect
				id={'tl'}
				key={2}
				className={'tl mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={props.xMin - miniBoxNum}
				y={props.yMin - miniBoxNum}
			/>
			<rect
				id={'tr'}
				key={3}
				className={'tr mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={props.xMax}
				y={props.yMin - miniBoxNum}
			/>
			<rect
				id={'bl'}
				key={4}
				className={'bl mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={props.xMin - miniBoxNum}
				y={props.yMax}
			/>
			<rect
				id={'br'}
				key={5}
				className={'br mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={props.xMax}
				y={props.yMax}
			/>
			<rect
				id={'tm'}
				key={6}
				className={'tm mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={((props.xMax - props.xMin) / 2) + props.xMin}
				y={props.yMin - miniBoxNum}
			/>
			<rect
				id={'rm'}
				key={7}
				className={'rm mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={props.xMax}
				y={props.yMin + ((props.yMax - props.yMin) / 2)}
			/>
			<rect
				id={'bm'}
				key={8}
				className={'bm mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={((props.xMax - props.xMin) / 2) + props.xMin}
				y={props.yMax}
			/>
			<rect
				id={'lm'}
				key={9}
				className={'lm mb'}
				width={miniBoxSize}
				height={miniBoxSize}
				x={props.xMin - miniBoxNum}
				y={props.yMin + ((props.yMax - props.yMin) / 2)}
			/>
		</g>
	)
}

export default BoundingBox;
