import { combineReducers } from 'redux';
import toolbar from './toolbarReducer';
import shapes from './shapeReducer';
import drag from './dragReducer';
import properties from './propertiesReducer';

const rootReducer = combineReducers({
	shapes,
	drag,
	toolbar,
	properties
});

export default rootReducer;
