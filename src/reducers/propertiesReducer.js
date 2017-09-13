const initialVisibility = {
	fill: 'open',
	stroke: 'closed',
	transform: 'closed'
}
const initialProperties = {
	fill: 'grey',
	stroke: 'black',
	strokeWidth: 5,
	initialVisibility
}
export default function propertiesReducer(state = initialProperties, action) {
	switch(action.type) {
		// case 'SELECT_FILL_COLOR':
		// 	return {...state, fill: action.color.hex }
		// case 'SELECT_STROKE_COLOR':
		// 	return {...state, stroke: action.stroke }
		// case 'SELECT_STROKE_WIDTH':
		// 	return {...state, strokeWidth: action.strokeWidth }
		case 'CHANGE_PROPERTY':
			state[action.payload.property] = action.payload.value;
			return state;
		case 'CHANGE_PROPERTY_VISIBILITY':
			state.propertyVisibility[action.payload.property] = action.payload.value;
			return state;
		default:
			return state;
	}
}
