const initialState = {
	dragging: false,
	area: false
}

export default function dragReducer(state = initialState, action) {
	switch(action.type) {
		case 'BEGIN_DRAG':
			return {
				dragging: true,
				area: action.area
			};
		case 'UPDATE_DRAG':
			return {
				dragging: true,
				area: action.area
			};
		case 'FINISH_DRAG':
			return {
				dragging: false,
				area: false
			};
		default:
			return state;
	}
}
