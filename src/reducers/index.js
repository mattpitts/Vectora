import { combineReducers } from 'redux';
import toolbar from './toolbarReducer';
import shapes from './shapeReducer';
import drag from './dragReducer';

const rootReducer = combineReducers({
	shapes,
	drag,
	toolbar
});

export default rootReducer;
