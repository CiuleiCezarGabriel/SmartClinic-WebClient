import { userService } from '../services/'
import { history } from '../utils'

export const UserActionTypes = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'
}

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user))
                    localStorage.setItem('user', JSON.stringify(user))
                    if (user.role === 'ADMIN') {
                        history.push('/admin');
                    }
                    else if (user.role === 'PATIENT') {
                        history.push('/patient')
                    }
                    else if (user.role === 'DOCTOR') {
                        history.push('/doctor')
                    }
                    else {
                        alert('Something went wrong!')
                        history.push('/login')
                    }
                })
            .catch(error => {
                dispatch(failure(error.toString()))
            })
    }

    function request(user) { return { type: UserActionTypes.LOGIN_REQUEST, user } }
    function success(user) { return { type: UserActionTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: UserActionTypes.LOGIN_FAILURE, error } }
}

export function logout() {
    userService.logout()
    history.push('/login')
    return { type: UserActionTypes.LOGOUT }
}

export function register(user) {
    return dispatch => {
        dispatch(request(user))
        userService.register(user)
            .then(
                user => {
                    if (window.location.pathname === '/registerNewUser') {
                        history.push('/admin')
                    }
                    else {
                        history.push('/login');
                    }
                    dispatchEvent(success(user))
                })
            .catch(error => {
                dispatch(failure(error.toString()))
            })
    }

    function request(user) { return { type: UserActionTypes.REGISTER_REQUEST, user } }
    function success(user) { return { type: UserActionTypes.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: UserActionTypes.REGISTER_FAILURE, error } }
}
