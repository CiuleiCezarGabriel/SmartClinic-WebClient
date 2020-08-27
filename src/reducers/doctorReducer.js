import { DoctorActionTypes } from '../actions/doctorActions'

const initialState = {
    loadingDoctors: false,
    data : []
}

export function getDoctors(state = initialState, action) {
    switch (action.type) {
        case DoctorActionTypes.GET_DOCTORS_REQUEST:
            return  { ...state, loadingDoctors: true }
        case DoctorActionTypes.GET_DOCTORS_SUCCESS:
            console.log(action.doctors)
            return  { ...state, data: action.doctors, loadingDoctors: false}
        case DoctorActionTypes.GET_DOCTORS_ERROR:
            return { ...state, data: [], loadingDoctors: false }
    }
    return state
}