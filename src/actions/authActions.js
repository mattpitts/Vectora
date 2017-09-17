export function loginSuccess(user) {
	return {type : 'LOGIN_SUCCESS', user }
}
export function logOut() {
	return { type: 'LOGOUT' }
}
