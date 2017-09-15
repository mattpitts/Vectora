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
	}
}
