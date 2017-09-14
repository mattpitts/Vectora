// export default function initKeyboardEventListeners(translateKeycode) {
// 	window.addEventListener('keydown', (event) => {
// 		// console.log(event.keyCode);
// 		translateKeycode(event.keyCode);
// 	})
// }
export default function initKeyboardEventListeners(actions) {
	window.addEventListener('keydown', (event) => {
		console.log(event.keyCode);
		switch(event.keyCode) {
			case 8:
				actions.shapeActions.deleteSelectedShape();
		}
	})
}
