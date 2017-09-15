export default function getSelectedIndex(shapes) {
	for (var i = 0; i < shapes.length; i++) {
		if(shapes[i].selected) {
			return i;
		}
	}
}
