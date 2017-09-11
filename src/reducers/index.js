import { combineReducers } from 'redux';
import toolbar from './toolbarReducer';
import shapes from './shapeReducer';

const rootReducer = combineReducers({
	shapes,
	toolbar
});

export default rootReducer;
