import { UserActionTypes } from '../actions/userActions'

const initialState = {
    loggedIn: false,
    user: []
}

export function authentification(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            }
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case UserActionTypes.LOGIN_FAILURE:
            return {
                loggedIn: false,
                user: null
            }
        case UserActionTypes.LOGOUT:
            return {
                loggedIn: false,
                user: null
            }
        default:
            return state
    }
}