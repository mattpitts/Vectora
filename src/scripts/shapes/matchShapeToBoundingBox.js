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
			return shape;
		case 'ellipse':
			shape.rx = (shape.boundingBox.xMax - shape.boundingBox.xMin) / 2;
			shape.ry = (shape.boundingBox.yMax - shape.boundingBox.yMin) / 2;
			shape.cx = shape.boundingBox.xMin + shape.rx;
			shape.cy = shape.boundingBox.yMin + shape.ry;
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
