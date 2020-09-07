import { DiagnosisActionType } from '../actions/diagnosisAction'

const diagnosisInitialState = {
    loadingDiagnose: false,
    data: null,
}

export function diagnosis(state = diagnosisInitialState, action) {
    switch (action.type) {
        case DiagnosisActionType.ADD_DIAGNOSIS_REQUEST:
            return { ...state, loadingDiagnose: true }
        case DiagnosisActionType.ADD_DIAGNOSIS_SUCCESS:
            return { ...state, data: action.diagnosis, loadingDiagnose: false }
        case DiagnosisActionType.ADD_DIAGNOSIS_ERROR:
            return { ...state, loadingDiagnose: false }

        case DiagnosisActionType.FIND_DIAGNOSIS_BY_APPOINTMENT_REQUEST:
            return { ...state, loadingDiagnose: true }
        case DiagnosisActionType.FIND_DIAGNOSIS_BY_APPOINTMENT_SUCCESS:
            return { ...state, data: action.diagnosis, loadingDiagnose: false }
        case DiagnosisActionType.FIND_DIAGNOSIS_BY_APPOINTMENT_ERROR:
            return { ...state, loadingDiagnose: false }

        case DiagnosisActionType.ADD_DRUG_PRESCRIPTION_REQUEST:
            return { ...state, loadingDiagnose: true }
        case DiagnosisActionType.ADD_DRUG_PRESCRIPTION_SUCCESS:
            return { ...state, data: action.diagnosis, loadingDiagnose: false }
        case DiagnosisActionType.ADD_DRUG_PRESCRIPTION_ERROR:
            return { ...state, loadingDiagnose: false }

        case DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_REQUEST:
            return { ...state, loadingDiagnose: true }
        case DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_SUCCESS:
            return { ...state, data: action.diagnosis, loadingDiagnose: false }
        case DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_ERROR:
            return { ...state, loadingDiagnose: false }
        default: // need this for default case
            return state
    }
}