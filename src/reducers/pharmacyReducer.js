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

        case PharmacyActionsType.ADD_PHARMACY_REQUEST:
            return { ...state, loadingPharmacy: false }
        case PharmacyActionsType.ADD_PHARMACY_SUCCESS:
            const newPharmacies = state.data
            const pharmacy = action.pharmacy.response
            debugger
            newPharmacies.push(pharmacy)
            return { ...state, data: newPharmacies, loadingPharmacy: false }
        case PharmacyActionsType.ADD_PHARMACY_ERROR:
            return { ...state, loadingPharmacy: false }

        case PharmacyActionsType.FETCH_ALL_DRUGS_REQUEST:
            return {...state, loadingPharmacy: true}
        case PharmacyActionsType.FETCH_ALL_DRUGS_SUCCESS:
            return {...state, drugs: action.allDrugs, loadingPharmacy:false}
        case PharmacyActionsType.FETCH_ALL_DRUGS_ERROR:
            return {...state, loadingPharmacy:false}
    }

    return state
}