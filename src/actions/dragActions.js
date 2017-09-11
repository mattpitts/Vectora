export function beginDrag(area) {
	return { type: 'BEGIN_DRAG', area }
}
export function updateDrag(area) {
	return { type: 'UPDATE_DRAG', area }
}
export function finishDrag(area) {
	return { type: 'FINISH_DRAG', area }
}
