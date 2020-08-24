import AppointmentService from '../services/appointmentService'
import { responseToJson } from '../utils';

export const AppointmentActionsType = {
    APPOITNEMNTS_GETALL_REQUEST: 'APPOITNEMNTS_GETALL_REQUEST',
    APPOITNEMNTS_GETALL_SUCCESS: 'APPOITNEMNTS_GETALL_SUCCESS',
    APPOITNEMNTS_GETALL_FAILURE: 'APPOITNEMNTS_GETALL_FAILURE',

    APPOINTMENTS_GET_BY_DOCTOR_REQUEST: 'APPOINTMENTS_GET_BY_DOCTOR_REQUEST',
    APPOINTMENTS_GET_BY_DOCTOR_SUCCESS: 'APPOINTMENTS_GET_BY_DOCTOR_SUCCESS',
    APPOINTMENTS_GET_BY_DOCTOR_ERROR: 'APPOINTMENTS_GET_BY_DOCTOR_ERROR'
};

export function requiestAppointments(){
    return{
        type: AppointmentActionsType.APPOITNEMNTS_GETALL_REQUEST,
    }
}

export function fetchAppointmentsSuccess(appointments) {
    return {
        type: AppointmentActionsType.APPOITNEMNTS_GETALL_SUCCESS,
        appointments
    }
}

export function fetchAppointmentsFailure(error) {
    return {
        type: AppointmentActionsType.APPOITNEMNTS_GETALL_FAILURE,
        error
    }
}

export function fetchAppointments() {
    return dispatch => {
        dispatch(requiestAppointments())
        return AppointmentService.fetchAppointments()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAppointmentsSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchAppointmentsFailure(error))
            })
    }
}

export function requiestAppointmentsForDoctor(){
    return{
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_REQUEST,
    }
}

export function fetchAppointmentsForDoctorSuccess(appointments) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_SUCCESS,
        appointments
    }
}

export function fetchAppointmentsForDoctorFailure(error) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_ERROR,
        error
    }
}

export function fetchAppointmentsForDoctor(id) {
    return dispatch => {
        dispatch(requiestAppointmentsForDoctor())
        return AppointmentService.fetchAppointmentsByDoctor(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAppointmentsForDoctorSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchAppointmentsForDoctorFailure(error))
            })
    }
}