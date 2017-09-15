export default function resizeShape(shape, x, y, nodeDrag) {
	x -= window.innerWidth * .08
	switch(nodeDrag) {
		case 'lm':
			if(x < shape.boundingBox.xMax) {
				shape.boundingBox.xMin = x;
				return shape;
			} else {
				return shape;
			}
		case 'rm':
			if(x > shape.boundingBox.xMin) {
				shape.boundingBox.xMax = x;
				return shape;
			} else {
				return shape;
			}
		case 'tm':
			if(y < shape.boundingBox.yMax) {
				shape.boundingBox.yMin = y;
				return shape;
			} else {
				return shape;
			}
		case 'bm':
			if(y > shape.boundingBox.yMin) {
				shape.boundingBox.yMax = y;
				return shape;
			} else {
				return shape;
			}
		case 'tl':
			if(x < shape.boundingBox.xMax) {
				shape.boundingBox.xMin = x;
			}
			if(y < shape.boundingBox.yMax) {
				shape.boundingBox.yMin = y;
			}
			return shape;
		case 'tr':
			if(x > shape.boundingBox.xMin) {
				shape.boundingBox.xMax = x;
			}
			if(y < shape.boundingBox.yMax) {
				shape.boundingBox.yMin = y;
			}
			return shape;
		case 'bl':
			if(x < shape.boundingBox.xMax) {
				shape.boundingBox.xMin = x;
			}
			if(y > shape.boundingBox.yMin) {
				shape.boundingBox.yMax = y;
			}
			return shape;
		case 'br':
			if(x > shape.boundingBox.xMin) {
				shape.boundingBox.xMax = x;
			}
			if(y > shape.boundingBox.yMin) {
				shape.boundingBox.yMax = y;
			}
			return shape;
		default:
			return shape;
	}
}
