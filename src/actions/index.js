import { UserActionTypes, login, logout, register } from './userActions';
import { AlertActionType, success, error, clear } from './alertActions'
import {
    AppointmentActionsType, fetchAppointmentsDoctorConfirmed,
    fetchAppointmentsForPatient, fetchAppointmentsDoctorUnconfirmed,
    addAppointment, updateAppointment,
    deleteAppointment, confirmAppointment
} from './appointmentActions'
import {
    QuestionActionsType, fetchQuestions, addQuestion,
    updateResponse, updateStatus
} from './questionActions'
import { DoctorActionTypes, getDoctors } from './doctorActions'
import {
    DiagnosisActionType, addDiagnosis, findDiagnosis,
    addDrugPrescription, deleteDrugPrescription
} from './diagnosisAction'

export {
    UserActionTypes,
    login,
    logout,
    register,

    AlertActionType,
    success,
    error,
    clear,

    QuestionActionsType,
    fetchQuestions,
    addQuestion,
    updateResponse,
    updateStatus,

    AppointmentActionsType,
    fetchAppointmentsDoctorConfirmed,
    fetchAppointmentsDoctorUnconfirmed,
    fetchAppointmentsForPatient,
    addAppointment,
    updateAppointment,
    deleteAppointment,
    confirmAppointment,

    DoctorActionTypes,
    getDoctors,

    DiagnosisActionType,
    addDiagnosis,
    findDiagnosis,
    addDrugPrescription,
    deleteDrugPrescription,

}