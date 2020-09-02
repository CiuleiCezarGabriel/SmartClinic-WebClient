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

    UPDATE_APPOINTMENT_REQUEST: 'UPDATE_APPOINTMENT_REQUEST',
    UPDATE_APPOINTMENT_SUCCESS: 'UPDATE_APPOINTMENT_SUCCESS',
    UPDATE_APPOINTMENT_ERROR: 'UPDATE_APPOINTMENT_ERROR',

    DELETE_APPOINTMENT_REQUEST: 'DELETE_APPOINTMENT_REQUEST',
    DELETE_APPOINTMENT_SUCCESS: 'DELETE_APPOINTMENT_SUCCESS',
    DELETE_APPOINTMENT_ERROR: 'DELETE_APPOINTMENT_ERROR',

    CONFIRM_APPOINTMENT_REQUEST: 'CONFIRM_APPOINTMENT_REQUEST',
    CONFIRM_APPOINTMENT_SUCCESS: 'CONFIRM_APPOINTMENT_SUCCESS',
    CONFIRM_APPOINTMENT_ERROR: 'CONFIRM_APPOINTMENT_ERROR',
};

export function requiestAppointmentsDoctorConfirmed(){return{type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_REQUEST,}}
export function fetchAppointmentsDoctorConfirmedSuccess(appointments) {return {type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_SUCCESS,appointments}}
export function fetchAppointmentsDoctorConfirmedFailure(error) {return {type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_ERROR,error}}

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

export function requiestAppointmentsDoctorUnconfirmed(){return{type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_REQUEST,}}
export function fetchAppointmentsDoctorUnconfirmedSuccess(appointments) {return {type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_SUCCESS,appointments}}
export function fetchAppointmentsDoctorUnconfirmedFailure(error) { return { type: AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_ERROR,error}}

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

export function requiestAppointmentsForPatient(){return{type: AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_REQUEST, }}
export function fetchAppointmentsForPatientSuccess(appointments) {return {type: AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_SUCCESS,appointments}}
export function fetchAppointmentsForPatientFailure(error) { return {type: AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_ERROR,error}}

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

export function requestAddAppointment(appointment) { return { type: AppointmentActionsType.ADD_APPOINTMENT_REQUEST, appointment } }
export function addAppointemntSucces(){ return { type: AppointmentActionsType.ADD_APPOINTMENT_SUCCESS}}
export function addAppointemntFailure(error){return {type: AppointmentActionsType.ADD_APPOINTMENT_ERROR, error}} 

export function addAppointment(appointment){
    return dispatch =>{
        dispatch(requestAddAppointment(appointment))

        AppointmentService.addAppointment(appointment)
            .then(app => dispatchEvent(addAppointemntSucces(app)))
            .catch(error => {
                dispatch(addAppointemntFailure(error.toString()))
            })
    }
}

export function requestUpdateAppointment(appointment) { return { type: AppointmentActionsType.UPDATE_APPOINTMENT_REQUEST, appointment } }
export function updateAppointemntSucces(){ return { type: AppointmentActionsType.UPDATE_APPOINTMENT_SUCCESS}}
export function updateAppointemntFailure(error){return {type: AppointmentActionsType.UPDATE_APPOINTMENT_ERROR, error}  } 

export function updateAppointment(appointment){
    return dispatch =>{
        dispatch(requestUpdateAppointment(appointment))
        
        AppointmentService.updateAppointment(appointment)
            .then(app => dispatchEvent(updateAppointemntSucces(app)))
            .catch(error => {
                dispatch(updateAppointemntFailure(error.toString()))
            })
    }
}

export function requestDeleteAppointment(id) { return { type: AppointmentActionsType.DELETE_APPOINTMENT_REQUEST, id } }
export function deleteAppointemntSucces(){ return { type: AppointmentActionsType.DELETE_APPOINTMENT_SUCCESS}}
export function deleteAppointemntFailure(error){return {type: AppointmentActionsType.DELETE_APPOINTMENT_ERROR, error}} 

export function deleteAppointment(id){
    return dispatch =>{
        dispatch(requestDeleteAppointment(id))

        AppointmentService.deleteAppointment(id)
            .then(app => dispatchEvent(deleteAppointemntSucces(id)))
            .catch(error => {
                dispatch(deleteAppointemntFailure(error.toString()))
            })
    }
}

export function requestConfirmAppointment(appointment) {return {  type: AppointmentActionsType.CONFIRM_APPOINTMENT_REQUEST } }
export function confirmAppointmentSuccess(){return {type: AppointmentActionsType.CONFIRM_APPOINTMENT_SUCCESS}}
export function confirmAppointmentFail(error){return{type: AppointmentActionsType.CONFIRM_APPOINTMENT_ERROR}}

export function confirmAppointment(id){
    return dispatch =>{
        dispatch(requestConfirmAppointment(id))

        AppointmentService.confirmAppointment(id)
            .then(app => dispatchEvent(confirmAppointmentSuccess(app)))
            .catch(error => {
                dispatch(confirmAppointmentFail(error.toString()))
            })
    }
}
