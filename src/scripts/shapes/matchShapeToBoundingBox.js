export default function matchShapeToBoundingBox(shape) {
	switch(shape.type) {
		case 'rect':
			shape.x = shape.boundingBox.xMin;
			shape.y = shape.boundingBox.yMin;
			shape.width = shape.boundingBox.xMax - shape.boundingBox.xMin;
			shape.height = shape.boundingBox.yMax - shape.boundingBox.yMin;
			return shape;
		case 'circle':
			let width = shape.boundingBox.xMax - shape.boundingBox.xMin;
			let height = shape.boundingBox.yMax - shape.boundingBox.yMin;
			let r = width < height ? width / 2 : height / 2;
			shape.r = r;
			shape.cx = shape.boundingBox.xMin + (width / 2);
			shape.cy = shape.boundingBox.yMin + (height / 2);
			// shape.boundingBox = {
			// 	xMin: shape.cx - r,
			// 	xMax: shape.cx + r,
			// 	yMin: shape.cy - r,
			// 	yMax: shape.cy + r
			// }
			return shape;
		case 'path':
			let xDiff = shape.boundingBox.xMin - shape.minX;
			let yDiff = shape.boundingBox.yMin - shape.minY;
			let deltaW = (shape.boundingBox.xMax - shape.boundingBox.xMin) / (shape.originalBounds.xMax - shape.originalBounds.xMin);
			let deltaH = (shape.boundingBox.yMax - shape.boundingBox.yMin) / (shape.originalBounds.yMax - shape.originalBounds.yMin);
			shape.scale = `scale(${deltaW} ${deltaH})`;
			shape.translate = `translate(${xDiff} ${yDiff})`;
			return shape;
		default:
			console.log('Invalid Shape Type');
	}
}
