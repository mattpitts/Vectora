export default function layoutReducer(state = { modal: 'none' }, action) {
	switch(action.type) {
		case 'SHOW_LOGIN_MODAL':
			return {...state, modal: 'login'};
		case 'HIDE_MODAL':
			return {...state, modal: 'none'};
		case 'SHOW_SIGNUP_MODAL':
			return {...state, modal: 'signup'}
		case 'SHOW_USER_PROJECTS_MODAL':
			return {...state, modal: 'projects'}
		case 'SHOW_SAVE_NEW_PROJECT_MODAL':
			return {...state, modal: 'newProject'}
		default:
			return state;
	}
}
