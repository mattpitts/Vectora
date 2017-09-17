const username = localStorage.username ? localStorage.username : false;

export default function authReducer(state = { username }, action) {
	switch(action.type) {
		case 'LOGIN_SUCCESS':
			return {...state, username: action.user }
		case 'LOGOUT':
			localStorage.clear();
			return {...state, username: false }
		default:
			return state;
	}
}
