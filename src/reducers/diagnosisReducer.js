import { DiagnosisActionType } from '../actions/diagnosisAction'

const diagnosisInitialState = {
    loadingDiagnose: false,
    prescriptions:[],
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
            const newPrescriptionsAdded = state.prescriptions.map(it => it);
            newPrescriptionsAdded.push(action.drugPrescription.drug)         
            return { ...state, data: action.drugPrescription.diagnosis, prescriptions: newPrescriptionsAdded, loadingDiagnose: false }
        case DiagnosisActionType.ADD_DRUG_PRESCRIPTION_ERROR:
            return { ...state, loadingDiagnose: false }

        case DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_REQUEST:
            return { ...state, loadingDiagnose: true }
        case DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_SUCCESS:
            const newPrescriptionDeleted = state.prescriptions.filter(it => it._id != action.drugPrescription.drug._id);
            return { ...state, data: action.drugPrescription.diagnosis, prescriptions:newPrescriptionDeleted, loadingDiagnose: false }
        case DiagnosisActionType.DELETE_DRUG_PRESCRIPTION_ERROR:
            return { ...state, loadingDiagnose: false }

        case DiagnosisActionType.FIND_PRESCRIPTION_BY_DIAGNOSIS_REQUEST:
            return {...state, loadingDiagnose: true}
        case DiagnosisActionType.FIND_PRESCRIPTION_BY_DIAGNOSIS_SUCCESS:
            return {...state, prescriptions: action.prescriptions, loadingDiagnose: false}
        case DiagnosisActionType.FIND_PRESCRIPTION_BY_DIAGNOSIS_ERROR:
            return {...state, loadingDiagnose:false}
        default: // need this for default case
            return state
    }
}