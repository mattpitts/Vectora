const initialProperties = {
	fill: 'grey',
	stroke: 'black',
	strokeWidth: 5
}
export default function propertiesReducer(state = initialProperties, action) {
	switch(action.type) {
		case 'SELECT_FILL_COLOR':
			return {...state, fill: action.fill }
		case 'SELECT_STROKE_COLOR':
			return {...state, stroke: action.stroke }
		case 'SELECT_STROKE_WIDTH':
			return {...state, strokeWidth: action.strokeWidth }
		default:
			return state;
	}
}
