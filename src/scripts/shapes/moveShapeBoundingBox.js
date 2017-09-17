export default function moveShapeBoundingBox(shape, x, y, initialCoords, initialBox) {
	let xDiff = initialCoords.x - x;
	let yDiff = initialCoords.y - y;
	shape.boundingBox.xMin = initialBox.xMin - xDiff;
	shape.boundingBox.xMax = initialBox.xMax - xDiff;
	shape.boundingBox.yMin = initialBox.yMin - yDiff;
	shape.boundingBox.yMax = initialBox.yMax - yDiff;
	return shape;
}
