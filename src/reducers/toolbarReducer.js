

export default function toolbarReducer(state = 'rect', action) {
	switch(action.type) {
		case 'SELECT_TOOL':
			return action.tool;
		default:
			return state;
	}
}
