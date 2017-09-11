import TestProject from '../TestProject';

export default function shapeReducer(state = {shapes: [], new: false}, action) {
	switch(action.type) {
		case 'CREATE_SHAPE':
			return {shapes: state.shapes, new: action.shape}
		case 'CHANGE_SHAPE':
			return {shapes: state.shapes, new: action.shape}
		case 'FINISH_SHAPE':
			return {shapes: [...state.shapes, action.shape], new: false}
		default:
			return state;
	}
}
