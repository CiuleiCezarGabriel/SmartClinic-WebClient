import { PharmacyActionsType } from '../actions/pharmacyActions'

const pharmaciesInitialState = {
    loadingPharmacy: false,
    drugs: [],
    data: []
}

export function pharmacies(state = pharmaciesInitialState, action) {
    switch (action.type) {
        case PharmacyActionsType.FETCH_PHARMACIES_REQUEST:
            return { ...state, loadingPharmacy: true }
        case PharmacyActionsType.FETCH_PHARMACIES_SUCCESS:
            return { ...state, data: action.pharmacies, loadingPharmacy: false }
        case PharmacyActionsType.FETCH_PHARMACIES_ERROR:
            return { ...state, data: [], loadingPharmacy: false }

        case PharmacyActionsType.FETCH_DRUG_REQUEST:
            return { ...state, loadingPharmacy: true }
        case PharmacyActionsType.FETCH_DRUG_SUCCESS:
            return { ...state, drugs: action.drugs, loadingPharmacy: false }
        case PharmacyActionsType.FETCH_DRUG_ERROR:
            return { ...state, drugs: [], loadingPharmacy: false }

        case PharmacyActionsType.ADD_PHARMACY_REQUEST:
            return { ...state, loadingPharmacy: false }
        case PharmacyActionsType.ADD_PHARMACY_SUCCESS:
            const newPharmacies = state.data.map(it => it)
            newPharmacies.push(action.pharmacy)
            return { ...state, data: newPharmacies, loadingPharmacy: false }
        case PharmacyActionsType.ADD_PHARMACY_ERROR:
            return { ...state, loadingPharmacy: false }

        case PharmacyActionsType.DELETE_PHARMACY_REQUEST:
            return { ...state, loadingPharmacy: false }
        case PharmacyActionsType.DELETE_PHARMACY_SUCCESS:
            const pharmacies = state.data.filter(it => it._id != action.pharmacy._id)
            return { ...state, data: pharmacies}
        case PharmacyActionsType.DELETE_PHARMACY_ERROR:
            return { ...state}

        case PharmacyActionsType.ADD_NEW_DRUG_TO_PHARMACY_REQUEST:
            return { ...state}
        case PharmacyActionsType.ADD_NEW_DRUG_TO_PHARMACY_SUCCESS:
            return { ...state, drugs: action.drug}
        case PharmacyActionsType.ADD_NEW_DRUG_TO_PHARMACY_ERROR:
            return { ...state}
    }

    return state
}