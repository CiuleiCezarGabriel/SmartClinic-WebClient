import { UserActionTypes, login, logout, register, getUsers, deleteUser } from './userActions';
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
    addDrugPrescription, deleteDrugPrescription, findPrescriptionByDiagnosis,
} from './diagnosisAction'

import { PharmacyActionsType, fetchPharmacies, addPharmacy,
     deletePharmacy, addNewDrugToPharmacy, fetchAllDrugs, fetchPharmacyDrugs } from './pharmacyActions'

import {ShoppingActionType, fetchDrugsByCart,fetchCartByUser, addDrugToCart,createCart, deleteDrugFromCart} from'./shoppingActions'

export {
    UserActionTypes,
    login,
    logout,
    register,
    getUsers,
    deleteUser,

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
    findPrescriptionByDiagnosis,

    PharmacyActionsType,
    addPharmacy,
    fetchPharmacies,
    fetchAllDrugs,
    deletePharmacy,
    addNewDrugToPharmacy,
    fetchPharmacyDrugs,

    ShoppingActionType,
    createCart,
    addDrugToCart,
    deleteDrugFromCart,
    fetchCartByUser,
    fetchDrugsByCart
}