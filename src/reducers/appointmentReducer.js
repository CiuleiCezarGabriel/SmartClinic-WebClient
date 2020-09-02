import { AppointmentActionsType } from '../actions/appointmentActions'

const appointmentsInitialState = {
    loadingAppointments: false,
    doctor_confirmed_app: [],
    doctor_unconfirmed_app: [],
    patient_app: []
}

export function appointments(state = appointmentsInitialState, action) {
    switch (action.type) {
        case AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_SUCCESS:
            return { ...state, doctor_confirmed_app: action.appointments, loadingAppointments: false }
        case AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_CONFIRMED_ERROR:
            return { ...state, doctor_confirmed_app: [], loadingAppointments: false }


        case AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_SUCCESS:
            return { ...state, doctor_unconfirmed_app: action.appointments, loadingAppointments: false }
        case AppointmentActionsType.APPOINTMENTS_GET_BY_DOCTOR_UNCONFIRMED_ERROR:
            return { ...state, doctor_unconfirmed_app: [], loadingAppointments: false }


        case AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_SUCCESS:
            return { ...state, patient_app: action.appointments, loadingAppointments: false }
        case AppointmentActionsType.APPOINTMENTS_GET_BY_PATIENT_ERROR:
            return { ...state, patient_app: [], loadingAppointments: false }


        case AppointmentActionsType.ADD_APPOINTMENT_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.ADD_APPOINTMENT_SUCCESS:
            return { ...state, loadingAppointments: false }
        case AppointmentActionsType.ADD_APPOINTMENT_ERROR:
            return { ...state, loadingAppointments: false }


        case AppointmentActionsType.UPDATE_APPOINTMENT_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.UPDATE_APPOINTMENT_SUCCESS:
            return { ...state, loadingAppointments: false }
        case AppointmentActionsType.UPDATE_APPOINTMENT_ERROR:
            return { ...state, loadingAppointments: false }

            
        case AppointmentActionsType.DELETE_APPOINTMENT_REQUEST:
            return { ...state, loadingAppointments: true }
        case AppointmentActionsType.DELETE_APPOINTMENT_SUCCESS:
            return { ...state, loadingAppointments: false }
        case AppointmentActionsType.DELETE_APPOINTMENT_ERROR:
            return { ...state, loadingAppointments: false }


        case AppointmentActionsType.CONFIRM_APPOINTMENT_REQUEST:
            return { ...state }
        case AppointmentActionsType.CONFIRM_APPOINTMENT_SUCCESS:
            return { ...state }
        case AppointmentActionsType.CONFIRM_APPOINTMENT_ERROR:
            return { ...state }
    }
    return state;
}


