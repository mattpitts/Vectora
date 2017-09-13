export function selectFillColor(color) {
	return { type: 'SELECT_FILL_COLOR', color }
}
export function selectStrokeColor(color) {
	return { type: 'SELECT_STROKE_COLOR', color }
}
export function selectStrokeWidth(width) {
	return { type: 'SELECT_STROKE_WIDTH', width }
}
