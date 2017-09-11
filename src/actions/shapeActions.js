export function createShape(shape) {
	return { type: 'CREATE_SHAPE', shape }
}
export function changeShape(shape) {
	return { type: 'CHANGE_SHAPE', shape }
}
export function finishShape(shape) {
	return { type: 'FINISH_SHAPE', shape }
}
