import { UserActionTypes } from '../actions/userActions'

const initialState = {
    loggedIn: false,
    user: [],
    patient: [],
    doctor: []
}

export function authentification(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user.user
            }
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user.user,
                patient: action.user.patient[0],
                doctor: action.user.doctor[0]
            }
        case UserActionTypes.LOGIN_FAILURE:
            return {
                loggedIn: false,
                user: null,
                patient: null,
                doctor: null
            }
        case UserActionTypes.LOGOUT:
            return {
                loggedIn: false,
                user: [],
                patient: [],
                doctor: []
            }
        default:
            return state
    }
}