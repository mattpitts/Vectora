import { combineReducers } from 'redux';
import toolbar from './toolbarReducer';
import shapes from './shapeReducer';
import drag from './dragReducer';
import properties from './propertiesReducer';
import layout from './layoutReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
	shapes,
	drag,
	toolbar,
	properties,
	layout,
	auth
});

export default rootReducer;
