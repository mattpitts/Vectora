export default function shapeReducer(state = {shapes: [], new: false, selected: false}, action) {
	let newShapes;
	switch(action.type) {
		case 'CREATE_SHAPE':
			return {...state, shapes: state.shapes, new: action.shape}
		case 'CHANGE_SHAPE':
			return {...state, shapes: state.shapes, new: action.shape}
		case 'FINISH_SHAPE':
			return {shapes: [...state.shapes, action.shape], new: false, selected: true}
		case 'SELECT_SHAPE':
			newShapes = state.shapes.map((shape, i) => {
				if(i == action.id) {
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
		// case 'CHANGE_SHAPE_FILL':
		// 	newShapes = state.shapes.map((shape, i) => {
		// 		if(i === action.payload.id) {
		// 			shape.fill = action.payload.fill;
		// 			return shape;
		// 		} else {
		// 			return shape;
		// 		}
		// 	});
		// 	return {...state, shapes: newShapes}
		// case 'CHANGE_SHAPE_STROKE':
		// 	newShapes = state.shapes.map((shape, i) => {
		// 		if(i === action.payload.id) {
		// 			shape.stroke = action.payload.stroke;
		// 			return shape;
		// 		} else {
		// 			return shape;
		// 		}
		// 	});
		// 	return {...state, shapes: newShapes}
		// case 'CHANGE_SHAPE_STROKE_COLOR':
		// 	newShapes = state.shapes.map((shape, i) => {
		// 		if(i === action.payload.id) {
		// 			shape.stroke = action.payload.stroke;
		// 			return shape;
		// 		} else {
		// 			return shape;
		// 		}
		// 	});
		// 	return {...state, shapes: newShapes}
		// case 'CHANGE_SHAPE_STROKE_WIDTH':
		// 	newShapes = state.shapes.map((shape, i) => {
		// 		if(i == action.payload.id) {
		// 			shape.strokeWidth = action.payload.strokeWidth;
		// 			return shape;
		// 		} else {
		// 			return shape;
		// 		}
		// 	});
		// 	return {...state, shapes: newShapes}
		case 'CHANGE_SHAPE_PROPERTY':
		console.log(action);
			newShapes = state.shapes.map((shape, i) => {
				if(i == action.payload.id) {
					shape[action.payload.property] = action.payload.value;
					return shape;
				} else {
					return shape;
				}
			})
			return {...state, shapes: newShapes}
		default:
			return state;
	}
}
