import { userService } from '../services/'
import { history } from '../utils'
import { responseToJson } from '../utils';

export const UserActionTypes = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',
    CLEAR_LOGOUT: 'CLEAR_LOGOUT',

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
                    localStorage.setItem('patient', JSON.stringify(user.patient))
                    localStorage.setItem('doctor', JSON.stringify(user.doctor))

                    if (user.user.role === 'ADMIN') {
                        history.push('/admin');
                    }
                    else if (user.user.role === 'PATIENT') {
                        history.push('/patient')
                    }
                    else if (user.user.role === 'DOCTOR') {
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
    function success(user, patient, doctor) { return { type: UserActionTypes.LOGIN_SUCCESS, user, patient, doctor } }
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


export function getUsers() {
    return dispatch => {
        dispatch(request())
        return userService.getUsers()
            .then(response => responseToJson(response))
            .then(json => dispatch(success(json)))
            .catch(error => {
                console.log(error)
                dispatch(failure(error.toString()))
            })
    }

    function request() { return { type: UserActionTypes.GETALL_REQUEST } }
    function success(users) { return { type: UserActionTypes.GETALL_SUCCESS, users } }
    function failure(error) { return { type: UserActionTypes.GETALL_FAILURE, error } }
}

export function deleteUser(id){
    return dispatch => {
        dispatch(request())
        return userService.deleteUser(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(success(json)))
            .catch(error => {
                console.log(error)
                dispatch(failure(error.toString()))
            })
    }

    function request() { return { type: UserActionTypes.DELETE_REQUEST } }
    function success(user) { return { type: UserActionTypes.DELETE_SUCCESS, user } }
    function failure(error) { return { type: UserActionTypes.DELETE_FAILURE, error } }
}