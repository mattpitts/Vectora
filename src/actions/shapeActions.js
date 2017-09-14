export function createShape(shape) {
	return { type: 'CREATE_SHAPE', shape }
}
export function changeShape(shape) {
	return { type: 'CHANGE_SHAPE', shape }
}
export function finishShape(shape) {
	return { type: 'FINISH_SHAPE', shape }
}
export function selectShape(id) {
	return { type: 'SELECT_SHAPE', id }
}
export function unselectShapes() {
	return { type: 'UNSELECT_SHAPES' }
}
export function deleteSelectedShape() {
	return { type: 'DELETE_SELECTED_SHAPE' }
}
// export function changeShapeFill(payload) {
// 	return { type: 'CHANGE_SHAPE_FILL', payload }
// }
// export function changeShapeStroke(payload) {
// 	return { type: 'CHANGE_SHAPE_STROKE', payload }
// }
// export function changeShapeStrokeColor(payload) {
// 	return { type: 'CHANGE_SHAPE_STROKE_COLOR', payload }
// }
// export function changeShapeStrokeWidth(payload) {
// 	return { type: 'CHANGE_SHAPE_STROKE_WIDTH', payload }
// }
export function changeShapeProperty(payload) {
	return { type: 'CHANGE_SHAPE_PROPERTY', payload }
}
