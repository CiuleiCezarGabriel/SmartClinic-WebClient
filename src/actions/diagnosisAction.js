import DiagnosisService from '../services/diagnosisService'
import { responseToJson } from '../utils';


export const DiagnosisActionType = {
    ADD_DIAGNOSIS_REQUEST: "ADD_DIAGNOSIS_REQUEST",
    ADD_DIAGNOSIS_SUCCESS: "ADD_DIAGNOSIS_SUCCESS",
    ADD_DIAGNOSIS_ERROR: "ADD_DIAGNOSIS_ERROR",

    FIND_DIAGNOSIS_BY_APPOINTMENT_REQUEST: "FIND_DIAGNOSIS_BY_APPOINTMENT_REQUEST",
    FIND_DIAGNOSIS_BY_APPOINTMENT_SUCCESS: "FIND_DIAGNOSIS_BY_APPOINTMENT_SUCCESS",
    FIND_DIAGNOSIS_BY_APPOINTMENT_ERROR: "FIND_DIAGNOSIS_BY_APPOINTMENT_ERROR",

    ADD_DRUG_PRESCRIPTION_REQUEST: "ADD_DRUG_PRESCRIPTION_REQUEST",
    ADD_DRUG_PRESCRIPTION_SUCCESS: "ADD_DRUG_PRESCRIPTION_SUCCESS",
    ADD_DRUG_PRESCRIPTION_ERROR: "ADD_DRUG_PRESCRIPTION_ERROR",

    DELETE_DRUG_PRESCRIPTION_REQUEST: "DELETE_DRUG_PRESCRIPTION_REQUEST",
    DELETE_DRUG_PRESCRIPTION_SUCCESS: "DELETE_DRUG_PRESCRIPTION_SUCCESS",
    DELETE_DRUG_PRESCRIPTION_ERROR: "DELETE_DRUG_PRESCRIPTION_ERROR",

    FIND_PRESCRIPTION_BY_DIAGNOSIS_REQUEST: "FIND_PRESCRIPTION_BY_DIAGNOSIS_REQUEST",
    FIND_PRESCRIPTION_BY_DIAGNOSIS_SUCCESS: "FIND_PRESCRIPTION_BY_DIAGNOSIS_SUCCESS",
    FIND_PRESCRIPTION_BY_DIAGNOSIS_ERROR: "FIND_PRESCRIPTION_BY_DIAGNOSIS_ERROR",
}

export function requestAddDiagnosis(diagnosis) { return { type: DiagnosisActionType.ADD_DIAGNOSIS_REQUEST, diagnosis } }
export function fetchAddDiagnosisSuccess(diagnosis) { return { type: DiagnosisActionType.ADD_DIAGNOSIS_SUCCESS, diagnosis } }
export function fetchAddDiagnosisError(err) { return { type: DiagnosisActionType.ADD_DIAGNOSIS_ERROR, err } }
export function addDiagnosis(diagnosis) {
    return dispatch => {
        dispatch(requestAddDiagnosis(diagnosis));

        DiagnosisService.addDiagnosis(diagnosis)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAddDiagnosisSuccess(json)))
            .catch(error => {
                dispatch(fetchAddDiagnosisError(error.toString()))
            })
    }
}

export function requestFindDiagnosis(appointment) { return { type: DiagnosisActionType.FIND_DIAGNOSIS_BY_APPOINTMENT_REQUEST, appointment } }
export function fetchFindDiagnosisSuccess(diagnosis) { return { type: DiagnosisActionType.FIND_DIAGNOSIS_BY_APPOINTMENT_SUCCESS, diagnosis } }
export function fetchFindDiagnosisError(err) { return { type: DiagnosisActionType.FIND_DIAGNOSIS_BY_APPOINTMENT_ERROR, err } };
export function findDiagnosis(appointment) {
    return dispatch => {
        dispatch(requestFindDiagnosis(appointment));

        return DiagnosisService.findDiagnosisByAppointment(appointment)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchFindDiagnosisSuccess(json)))
            .catch(error => {
                dispatch(fetchFindDiagnosisError(error.toString()))
            })
    }
}

export function requestAddDrugPrescription(drugPrescription) { return { type: DiagnosisActionType.ADD_DRUG_PRESCRIPTION_REQUEST, drugPrescription } }
export function fetchAddDrugPrescriptionSuccess(drugPrescription) { return { type: DiagnosisActionType.ADD_DRUG_PRESCRIPTION_SUCCESS, drugPrescription } }
export function fetchAddDrugPrescriptioinError(err) { return { type: DiagnosisActionType.ADD_DRUG_PRESCRIPTION_ERROR, err } };
export function addDrugPrescription(drugPrescription) {
    return dispatch => {
        dispatch(requestAddDrugPrescription(drugPrescription));

        DiagnosisService.addDrugPrescription(drugPrescription)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAddDrugPrescriptionSuccess(json)))
            .catch(error => {
                dispatch(fetchAddDrugPrescriptioinError(error.toString()))
            })
    }
}

export function requestDeleteDrugPrescription(id) { return { type: DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_REQUEST, id } }
export function fetchDeleteDrugPrescriptionSuccess(drugPrescription) { return { type: DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_SUCCESS, drugPrescription } };
export function fetchDeleteDrugPrescriptionError(err) { return { type: DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_ERROR, err } }
export function deleteDrugPrescription(id, diagnosis) {
    return dispatch => {
        dispatch(requestDeleteDrugPrescription(id));

        DiagnosisService.deleteDrugPrescription(id, diagnosis)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchDeleteDrugPrescriptionSuccess(json)))
            .catch(error => {
                dispatch(fetchDeleteDrugPrescriptionError(error.toString()))
            })
    }
}

export function requestFindPrescriptionByDiagnosis(id) { return { type: DiagnosisActionType.FIND_PRESCRIPTION_BY_DIAGNOSIS_REQUEST, id } }
export function findPrescriptionByDiagnosisSuccess(prescriptions) { return { type: DiagnosisActionType.FIND_PRESCRIPTION_BY_DIAGNOSIS_SUCCESS, prescriptions } }
export function findPrescriptionByDiagnosisError(err) { return { type: DiagnosisActionType.FIND_PRESCRIPTION_BY_DIAGNOSIS_ERROR, err } }
export function findPrescriptionByDiagnosis(id) {
    return dispatch => {
        dispatch(requestFindPrescriptionByDiagnosis(id));

        DiagnosisService.findPrescriptionByDiagnosis(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(findPrescriptionByDiagnosisSuccess(json)))
            .catch(error => {
                dispatch(findPrescriptionByDiagnosisError(error))
            })

    }
}