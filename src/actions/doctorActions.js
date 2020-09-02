import { DoctorService } from '../services/'
import { responseToJson } from '../utils';

export const DoctorActionTypes = {
    GET_DOCTORS_REQUEST: 'GET_DOCTORS_REQUEST',
    GET_DOCTORS_SUCCESS: 'GET_DOCTORS_SUCCESS',
    GET_DOCTORS_ERROR: 'GET_DOCTORS_FAILURE'
}

export function getDoctorsRequest() {
    return {
        type: DoctorActionTypes.GET_DOCTORS_REQUEST
    }
}

export function getDoctorsSuccess(doctors) {
    return {
        type: DoctorActionTypes.GET_DOCTORS_SUCCESS,
        doctors
    }
}

export function getDoctorsError(error) {
    return {
        type: DoctorActionTypes.GET_DOCTORS_ERROR,
        error
    }
}

export function getDoctors() {
    return dispatch => {
        dispatch(getDoctorsRequest())
        return DoctorService.getDoctors()
            .then(response => responseToJson(response))
            .then(json => dispatch(getDoctorsSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(getDoctorsError(error))
            })
    }
}

