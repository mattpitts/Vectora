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
