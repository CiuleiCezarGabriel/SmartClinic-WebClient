import { ShoppingService } from '../services/shopService'
import { responseToJson } from '../utils';

export const ShoppingActionType = {
    FETCH_CART_BY_USER_REQUEST : "FETCH_CART_BY_USER_REQUEST",
    FETCH_CART_BY_USER_SUCCESS : "FETCH_CART_BY_USER_SUCCESS",
    FETCH_CART_BY_USER_ERROR : "FETCH_CART_BY_USER_ERROR",

    FETCH_DRUGS_BY_CART_REQUEST : "FETCH_DRUGS_BY_CART_REQUEST",
    FETCH_DRUGS_BY_CART_SUCCESS : "FETCH_DRUGS_BY_CART_SUCCESS",
    FETCH_DRUGS_BY_CART_ERROR : "FETCH_DRUGS_BY_CART_ERROR",

    ADD_DRUG_TO_CART_REQUEST : "ADD_DRUG_TO_CART_REQUEST",
    ADD_DRUG_TO_CART_SUCCESS : "ADD_DRUG_TO_CART_SUCCESS",
    ADD_DRUG_TO_CART_ERROR : "ADD_DRUG_TO_CART_ERROR",

    DELETE_DRUG_FORM_CART_REQUEST : "DELETE_DRUG_FORM_CART_REQUEST",
    DELETE_DRUG_FORM_CART_SUCCESS : "DELETE_DRUG_FORM_CART_SUCCESS",
    DELETE_DRUG_FORM_CART_ERROR : "DELETE_DRUG_FORM_CART_ERROR",

    CREATE_CART_REQUEST : "CREATE_CART_REQUEST",
    CREATE_CART_SUCCESS : "CREATE_CART_SUCCESS",
    CREATE_CART_ERROR : "CREATE_CART_ERROR",
}

export function fetchCartByUserRequest(id) { return { type: ShoppingActionType.FETCH_CART_BY_USER_REQUEST, id } }
export function fetchCartByUserSuccess(cart) { return { type: ShoppingActionType.FETCH_CART_BY_USER_SUCCESS, cart } }
export function fetchCartByUserError(error) { return { type: ShoppingActionType.FETCH_CART_BY_USER_ERROR, error } }
export function fetchCartByUser(id) {
    return dispatch => {
        dispatch(fetchCartByUserRequest(id))

        return ShoppingService.getCartByUser(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchCartByUserSuccess(json)))
            .catch(error => dispatch(fetchCartByUserError(error)))
    }
}

export function fetchDrugsByCartRequest(id) { return { type: ShoppingActionType.FETCH_DRUGS_BY_CART_REQUEST, id } }
export function fetchDrugsByCartSuccess(drugs) { return { type: ShoppingActionType.FETCH_DRUGS_BY_CART_SUCCESS, drugs } }
export function fetchDrugsByCartError(error) { return { type: ShoppingActionType.FETCH_DRUGS_BY_CART_ERROR, error } }
export function fetchDrugsByCart(id) {
    return dispatch => {
        dispatch(fetchDrugsByCartRequest(id));

        return ShoppingService.getAllDrugsCart(id)
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchDrugsByCartSuccess(json)))
            .catch(error => dispatch(fetchDrugsByCartError(error)))
    }
}

export function addDrugToCartRequest(drug) { return { type: ShoppingActionType.ADD_DRUG_TO_CART_REQUEST, drug } };
export function addDrugToCartSuccess(object) { return { type: ShoppingActionType.ADD_DRUG_TO_CART_SUCCESS, object } };
export function addDrugToCartError(err) { return { type: ShoppingActionType.ADD_DRUG_TO_CART_ERROR,err } };
export function addDrugToCart(drugCart) {
    return dispatch => {
        dispatch(addDrugToCartRequest(drugCart));

        return ShoppingService.addDrugToCart(drugCart)
            .then(response => responseToJson(response))
            .then(json => dispatch(addDrugToCartSuccess(json)))
            .catch(error => dispatch(addDrugToCartError(error)))
    }
}

export function createCartRequest(cart) { return { type: ShoppingActionType.CREATE_CART_REQUEST, cart } };
export function createCartSuccess(cart) { return { type: ShoppingActionType.CREATE_CART_SUCCESS, cart } };
export function createCartError(error) { return { type: ShoppingActionType.CREATE_CART_ERROR, error } };
export function createCart(cart) {
    return dispatch => {
        dispatch(createCartRequest(cart));

        return ShoppingService.createCart(cart)
                .then(response => responseToJson(response))
                .then(json => dispatch(createCartSuccess(json)))
                .catch(error => dispatch(createCartError(error)))
    }
}

export function deleteDrugFromCartRequest(drug, cart) { return { type: ShoppingActionType.DELETE_DRUG_FORM_CART_REQUEST, drug, cart } };
export function deleteDrugFromCartSuccess(object) { return { type: ShoppingActionType.DELETE_DRUG_FORM_CART_SUCCESS, object } };
export function deleteDrugFromCartError(err) { return { type: ShoppingActionType.DELETE_DRUG_FORM_CART_ERROR, error } };
export function deleteDrugFromCart(drug, cart) {
    return dispatch => {
        dispatch(deleteDrugFromCartRequest(drug, cart));

        return ShoppingService.deleteDrugFromCart(drug, cart)
                .then(response => responseToJson(response))
                .then(json => dispatch(deleteDrugFromCartSuccess(json)))
                .catch(error => dispatch(deleteDrugFromCartError(error)))
    }
}