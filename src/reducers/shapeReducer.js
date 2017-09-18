const initialState = {
	projectID: false,
	projectName: false,
	shapes: [],
	new: false,
	selected: false,
	deletePermission: true,
}

export default function shapeReducer(state = initialState, action) {
	let newShapes;
	switch(action.type) {
		case 'CREATE_SHAPE':
			return {...state, shapes: state.shapes, new: action.shape}
		case 'CHANGE_SHAPE':
			return {...state, shapes: state.shapes, new: action.shape}
		case 'FINISH_SHAPE':
			return {...state, shapes: [...state.shapes, action.shape], new: false, selected: true}
		case 'SELECT_SHAPE':
			newShapes = state.shapes.map((shape, i) => {
				if(i === +action.id) {
					shape.selected = true;
					return shape;
				} else {
					if(shape.selected) {
						shape.selected = false;
						return shape
					} else {
						return shape;
					}
				}
			})
			return {...state, shapes: newShapes, selected: true}
		case 'UNSELECT_SHAPES':
			let unselectedShapes = state.shapes.map((shape, i) => {
				if(shape.selected) {
					shape.selected = false;
					return shape;
				} else {
					return shape;
				}
			})
			return {...state, shapes: unselectedShapes, selected: false}
		case 'SET_SHAPE_DELETE_PERMISSION':
			return {...state, deletePermission: action.payload }
		case 'DELETE_SELECTED_SHAPE':
			if(!state.deletePermission) {
				return state;
			}
			let selectedIndex
			for (let i = 0; i < state.shapes.length; i++) {
				if(state.shapes[i].selected) {
					selectedIndex = i;
				}
			}
			let before = state.shapes.slice(0, selectedIndex)
			let after = state.shapes.slice(selectedIndex + 1, state.shapes.length)
			// let shapes = [...before, ...after];
			return {...state, shapes: [...before, ...after]}
		case 'CHANGE_SHAPE_PROPERTY':
			newShapes = state.shapes.map((shape, i) => {
				if(i === +action.payload.id) {
					shape[action.payload.property] = action.payload.value;
					return shape;
				} else {
					return shape;
				}
			})
			return {...state, shapes: newShapes}
		case 'RESIZE_SHAPE':
			state.shapes[action.payload.index] = action.payload.selectedShape
			return {...state};
		case 'SET_PROJECT_ID':
			return {...state, projectID: action.id, projectName: action.name }
		case 'LOAD_PROJECT':
			return {...state, projectID: action.project._id, shapes: action.project.shapes, projectName: action.project.name }
		case 'CLEAR_ARTBOARD':
			return {...initialState}
		// case 'FETCH_PROJECT_REQUEST':
		// 	return {...state, fetching: true }
		// case 'FETCH_PROJECT_SUCCESS':
		// case 'FETCH_PROJECT_FAILURE':
		default:
			return state;
	}
}
