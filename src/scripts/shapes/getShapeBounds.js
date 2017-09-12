export default function getShapeBounds(shape) {
	switch(shape.type) {
		case 'rect':
			return {
				xMin: shape.x,
				xMax: shape.x + shape.width,
				yMin: shape.y,
				yMax: shape.y + shape.height
			}
	}
}
