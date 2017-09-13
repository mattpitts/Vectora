export default function getSelectedShape(shapes) {
	let selected;
	shapes.forEach(shape => {
		if(shape.selected) {
			selected = shape;
			return;
		}
	})
	return selected;
}
