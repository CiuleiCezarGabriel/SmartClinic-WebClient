import AppointmentService from '../services/appointmentService'
import { responseToJson } from '../utils';

export const AppointmentActionsType = {
    APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_REQUEST: 'APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_REQUEST',
    APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_SUCCESS: 'APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_SUCCESS',
    APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_ERROR: 'APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_ERROR',

    APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_REQUEST: 'APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_REQUEST',
    APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_SUCCESS: 'APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_SUCCESS',
    APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_ERROR: 'APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_ERROR',

    APPOINTMENTS_GET_BY_PATIENT_REQUEST: 'APPOINTMENTS_GET_BY_PATIENT_REQUEST',
    APPOINTMENTS_GET_BY_PATIENT_SUCCESS: 'APPOINTMENTS_GET_BY_PATIENT_SUCCESS',
    APPOINTMENTS_GET_BY_PATIENT_ERROR: 'APPOINTMENTS_GET_BY_PATIENT_ERROR',

    ADD_APPOINTMENT_REQUEST: 'ADD_APPOINTMENT_REQUEST',
    ADD_APPOINTMENT_SUCCESS: 'ADD_APPOINTMENT_SUCCESS',
    ADD_APPOINTMENT_ERROR: 'ADD_APPOINTMENT_ERROR',
};

export function requiestAppointmentsDoctorConfirmed(){
    return{
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_REQUEST,
    }
}

export function fetchAppointmentsDoctorConfirmedSuccess(appointments) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_SUCCESS,
        appointments
    }
}

export function fetchAppointmentsDoctorConfirmedFailure(error) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_ERROR,
        error
    }
}

export function fetchAppointmentsDoctorConfirmed() {
    return dispatch => {
        dispatch(requiestAppointmentsDoctorConfirmed())
        return AppointmentService.fetchAppointmentsByDoctorConfirmed()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAppointmentsDoctorConfirmedSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchAppointmentsDoctorConfirmedFailure(error))
            })
    }
}

export function requiestAppointmentsDoctorUnconfirmed(){
    return{
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_REQUEST,
    }
}

export function fetchAppointmentsDoctorUnconfirmedSuccess(appointments) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_SUCCESS,
        appointments
    }
}

export function fetchAppointmentsDoctorUnconfirmedFailure(error) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_ERROR,
        error
    }
}

export function fetchAppointmentsDoctorUnconfirmed() {
    return dispatch => {
        dispatch(requiestAppointmentsDoctorUnconfirmed())
        return AppointmentService.fetchAppointmentsByDoctorUnconfirmed()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAppointmentsDoctorUnconfirmedSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchAppointmentsDoctorUnconfirmedFailure(error))
            })
    }
}

export function requiestAppointmentsForPatient(){
    return{
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_REQUEST,
    }
}

export function fetchAppointmentsForPatientSuccess(appointments) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_SUCCESS,
        appointments
    }
}

export function fetchAppointmentsForPatientFailure(error) {
    return {
        type: AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_ERROR,
        error
    }
}

export function fetchAppointmentsForPatient() {
    return dispatch => {
        dispatch(requiestAppointmentsForPatient())
        return AppointmentService.fetchAppointmentsByPatient()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAppointmentsForPatientSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchAppointmentsForPatientFailure(error))
            })
    }
}


export function requestAddAppointment(appointment) {
     return { 
         type: AppointmentActionsType.ADD_APPOINTMENT_REQUEST, 
         appointment 
    } 
}
export function addAppointemntSucces(){
    return {
        type: AppointmentActionsType.ADD_APPOINTMENT_SUCCESS
    }
}
export function addAppoinremntFailure(error){
    return{
        type: AppointmentActionsType.ADD_APPOINTMENT_ERROR
    }
}
export function addAppointment(appointment){
    return dispatch =>{
        dispatch(requestAddAppointment(appointment))

        AppointmentService.addAppointment(appointment)
            .then(app => dispatchEvent(success(app)))
            .catch(error => {
                dispatch(failure(error.toString()))
            })
    }
}
