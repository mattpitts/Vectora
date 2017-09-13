import React from 'react';
import constructor from './constructor';
import BoundingBox from '../../Components/Shapes/BoundingBox';

export default function selectedConstructor(shape, i) {
	let constructedShape = constructor(shape, i);
	return (
		<g key={i}>
			<BoundingBox
				xMin={shape.boundingBox.xMin}
				xMax={shape.boundingBox.xMax}
				yMin={shape.boundingBox.yMin}
				yMax={shape.boundingBox.yMax}
			/>
			{constructedShape}
		</g>
	)
}
