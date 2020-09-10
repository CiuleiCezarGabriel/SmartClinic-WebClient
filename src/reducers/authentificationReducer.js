import { UserActionTypes } from '../actions/userActions'

const initialState = {
    loggedIn: false,
    loggedPatient: false,
    loggedDoctor: false,
    loggedAdmin: false,
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
            let loggedInPatient = false
            let loggedInDoctor = false
            let loggedInAdmin = false
            if (action.user.user.role == 'PATIENT') {
                loggedInPatient = true
            }
            if (action.user.user.role == 'DOCTOR') {
                loggedInDoctor = true
            }
            if (action.user.user.role == 'ADMIN') {
                loggedInAdmin = true
            }

            return {
                loggedIn: true,
                loggedPatient: loggedInPatient,
                loggedDoctor: loggedInDoctor,
                loggedAdmin: loggedInAdmin,
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