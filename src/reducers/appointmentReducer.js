import { AppointmentActionsType } from '../actions/appointmentActions'

const appointmentsInitialState = {
    loadingAppointments: false,
    data: []
}

export function appointments(state = appointmentsInitialState, action) {
    switch (action.type) {
        case AppointmentActionsType.APPOITNEMNTS_GETALL_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.APPOITNEMNTS_GETALL_SUCCESS:
            return { ...state, data: action.appointments, loadingAppointments: false }
        case AppointmentActionsType.APPOITNEMNTS_GETALL_FAILURE:
            return { ...state, data: [], loadingAppointments: false }
    }
    return state;
}

