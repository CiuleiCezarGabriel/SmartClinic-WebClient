import PharmacyService from '../services/pharmacyService'
import { responseToJson } from '../utils'

export const PharmacyActionsType = {
    FETCH_PHARMACIES_REQUEST: "FETCH_PHARMACIES_REQUEST",
    FETCH_PHARMACIES_SUCCESS: "FETCH_PHARMACIES_SUCCESS",
    FETCH_PHARMACIES_ERROR: "FETCH_PHARMACIES_ERROR",

    ADD_PHARMACY_REQUEST: 'ADD_PHARMACY_REQUEST',
    ADD_PHARMACY_SUCCESS: 'ADD_PHARMACY_SUCCESS',
    ADD_PHARMACY_ERROR: 'ADD_PHARMACY_ERROR',

    DELETE_PHARMACY_REQUEST: 'DELETE_PHARMACY_REQUEST',
    DELETE_PHARMACY_SUCCESS: 'DELETE_PHARMACY_SUCCESS',
    DELETE_PHARMACY_ERROR: 'DELETE_PHARMACY_ERROR',

    FETCH_PHARMACY_DRUGS_REQUEST: "FETCH_PHARMACY_DRUGS_REQUEST",
    FETCH_PHARMACY_DRUGS_SUCCESS: "FETCH_PHARMACY_DRUGS_SUCCESS",
    FETCH_PHARMACY_DRUGS_ERROR: "FETCH_PHARMACY_DRUGS_ERROR",

    ADD_DRUG_TO_PHARMACY_REQUEST: 'ADD_DRUG_TO_PHARMACY_REQUEST',
    ADD_DRUG_TO_PHARMACY_SUCCESS: 'ADD_DRUG_TO_PHARMACY_SUCCESS',
    ADD_DRUG_TO_PHARMACY_ERROR: 'ADD_DRUG_TO_PHARMACY_ERROR',

    ADD_NEW_DRUG_TO_PHARMACY_REQUEST: 'ADD_NEW_DRUG_TO_PHARMACY_REQUEST',
    ADD_NEW_DRUG_TO_PHARMACY_SUCCESS: 'ADD_NEW_DRUG_TO_PHARMACY_SUCCESS',
    ADD_NEW_DRUG_TO_PHARMACY_ERROR: 'ADD_NEW_DRUG_TO_PHARMACY_ERROR',

    FETCH_ALL_DRUGS_REQUEST: 'FETCH_ALL_DRUGS_REQUEST',
    FETCH_ALL_DRUGS_SUCCESS: 'FETCH_ALL_DRUGS_SUCCESS',
    FETCH_ALL_DRUGS_ERROR: 'FETCH_ALL_DRUGS_ERROR',
}

export function requestPharmacies() {
    return {
        type: PharmacyActionsType.FETCH_PHARMACIES_REQUEST
    }
}

export function fetchPharmaciesSuccess(pharmacies) {
    return {
        type: PharmacyActionsType.FETCH_PHARMACIES_SUCCESS,
        pharmacies
    }
}

export function fetchPharmaciesError(error) {
    return {
        type: PharmacyActionsType.FETCH_PHARMACIES_ERROR,
        error
    }
}

export function fetchPharmacies() {
    return dispatch => {
        dispatch(requestPharmacies())

        return PharmacyService.fetchPharmacies()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchPharmaciesSuccess(json)))
            .catch(error => {
                dispatch(fetchPharmaciesError(error))
            })
    }
}

export function requestDrugs(){
    return{
        type: PharmacyActionsType.FETCH_DRUG_REQUEST,
    }
}

export function fetchDrugSuccess(drugs){
    return{
        type: PharmacyActionsType.FETCH_DRUG_SUCCESS,
        drugs
    }
}

export function fetchDrugsError(err){
    return{
        type: PharmacyActionsType.FETCH_DRUG_ERROR,
        err
    }
}

export function fetchDrugs() {
    return dispatch => {
        dispatch(requestDrugs());
        return PharmacyService.getDrugs()
            .then(response => responseToJson(response))
            .then(json => fetchDrugSuccess(json))
            .catch(error => fetchDrugsError(error))
    }
}

export function addPharmacyRequest() {
    return {
        type: PharmacyActionsType.ADD_PHARMACY_REQUEST
    }
}

export function addPharmacySuccess(pharmacy) {
    return {
        type: PharmacyActionsType.ADD_PHARMACY_SUCCESS,
        pharmacy
    }
}

export function addPharmacyError(error) {
    return {
        type: PharmacyActionsType.ADD_PHARMACY_ERROR,
        error
    }
}

export function addPharmacy(pharmacy) {
    return dispatch => {
        dispatch(addPharmacyRequest())
        return PharmacyService.addPharmacy(pharmacy)
            .then(response => responseToJson(response))
            .then(json => dispatch(addPharmacySuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(addPharmacyError(error))
            })
    }
}


export function requestAllDrugs() {
    return {
        type: PharmacyActionsType.FETCH_ALL_DRUGS_REQUEST
    }
}

export function fetchAllDrugsSuccess(drugs) {
    return {
        type: PharmacyActionsType.FETCH_ALL_DRUGS_SUCCESS,
        drugs
    }

}
export function fetchAllDrugsError(err) {
    return {
        type: PharmacyActionsType.FETCH_ALL_DRUGS_ERROR,
        err
    }
}

export function fetchAllDrugs() {
    return dispatch => {

        dispatch(requestAllDrugs());

        return PharmacyService.fetchAllDrugs()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchAllDrugsSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchAllDrugsError(error))
            })
    }
}
export function deletePharmacyRequest() {
    return {
        type: PharmacyActionsType.DELETE_PHARMACY_REQUEST
    }
}

export function deletePharmacySuccess(pharmacy) {
    return {
        type: PharmacyActionsType.DELETE_PHARMACY_SUCCESS,
        pharmacy
    }
}

export function deletePharmacyError(error) {
    return {
        type: PharmacyActionsType.DELETE_PHARMACY_ERROR,
        error
    }
}

export function deletePharmacy(id) {
    return dispatch => {
        dispatch(deletePharmacyRequest())
        return PharmacyService.deletePharmacy(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(deletePharmacySuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(deletePharmacyError(error))
            })
    }
}

export function addNewDrugToPharmacyRequest() {
    return {
        type: PharmacyActionsType.ADD_NEW_DRUG_TO_PHARMACY_REQUEST
    }
}

export function addNewDrugToPharmacySuccess(drug) {
    return {
        type: PharmacyActionsType.ADD_NEW_DRUG_TO_PHARMACY_SUCCESS,
        drug
    }
}

export function addNewDrugToPharmacyError(error) {
    return {
        type: PharmacyActionsType.ADD_NEW_DRUG_TO_PHARMACY_ERROR,
        error
    }
}

export function addNewDrugToPharmacy(id, drug) {
    return dispatch => {
        dispatch(addNewDrugToPharmacyRequest())
        return PharmacyService.addNewDrugToPharmacy(id, drug)
            .then(response => responseToJson(response))
            .then(json => dispatch(addNewDrugToPharmacySuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(addNewDrugToPharmacyError(error))
            })
    }
}

export function requestPharmacyDrugs(id) { return { type: PharmacyActionsType.FETCH_PHARMACY_DRUGS_REQUEST, id } }
export function fetchPharmacyDrugsSuccess(drugs) { return { type: PharmacyActionsType.FETCH_PHARMACY_DRUGS_SUCCESS, drugs } }
export function fetchPharmacyDrugsError(error) { return { type: PharmacyActionsType.FETCH_PHARMACY_DRUGS_ERROR, err } }
export function fetchPharmacyDrugs(id) {
    return dispatch =>{
        dispatch(requestPharmacyDrugs())

        return PharmacyService.fetchDrugsOfPharmacy(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchPharmacyDrugsSuccess(json)))
            .catch(error => {
                console.log(error)
                dispatch(fetchPharmacyDrugsError(error))
            })
    }

}
