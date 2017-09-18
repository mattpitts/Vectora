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
export function toggleShapeDeletePermission(payload) {
	return { type: 'TOGGLE_SHAPE_DELETE_PERMISSION', payload }
}
export function resizeShape(payload) {
	return { type: 'RESIZE_SHAPE', payload }
}
export function changeShapeProperty(payload) {
	return { type: 'CHANGE_SHAPE_PROPERTY', payload }
}
export function setProjectId(id, name) {
	return { type: 'SET_PROJECT_ID', id, name }
}
export function loadProject(project) {
	return { type: 'LOAD_PROJECT', project }
}
// export function fetchProjectRequest() {
// 	return { type: 'FETCH_PROJECT', status: 'fetching'}
// }
// export function fetchProjectSuccess(project) {
// 	return { type: 'FETCH_PROJECT', status: 'success', project }
// }
// export function fetchProjectFailure(error) {
// 	return { type: 'FETCH_PROJECT', status: 'failure', error }
// }
