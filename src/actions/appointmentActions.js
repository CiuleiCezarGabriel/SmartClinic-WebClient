import AppointmentService from '../services/appointmentService'
import { responseToJson } from '../utils';

export const AppointmentActionsType = {
    APPOITNEMNTS_GETALL_REQUEST: 'APPOITNEMNTS_GETALL_REQUEST',
    APPOITNEMNTS_GETALL_SUCCESS: 'APPOITNEMNTS_GETALL_SUCCESS',
    APPOITNEMNTS_GETALL_FAILURE: 'APPOITNEMNTS_GETALL_FAILURE',
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