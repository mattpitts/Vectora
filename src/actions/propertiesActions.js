// export function selectFillColor(color) {
// 	return { type: 'SELECT_FILL_COLOR', color }
// }
// export function selectStrokeColor(color) {
// 	return { type: 'SELECT_STROKE_COLOR', color }
// }
// export function selectStrokeWidth(width) {
// 	return { type: 'SELECT_STROKE_WIDTH', width }
// }
export function changeProperty(payload) {
	return { type: 'CHANGE_PROPERTY', payload }
}
export function changePropertyVisibility(payload) {
	return { type: 'CHANGE_PROPERTY_VISIBILITY', payload }
}
