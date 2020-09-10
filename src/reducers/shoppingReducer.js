import {ShoppingActionType} from '../actions/shoppingActions'

const shoppingInitialState = {
    loadingData: false,
    data: [],
    cart_obj: null,
}

export function shopping(state = shoppingInitialState, action){
    switch(action.type){
        case ShoppingActionType.FETCH_CART_BY_USER_REQUEST:
            return{...state, loadingData:true};
        case ShoppingActionType.FETCH_CART_BY_USER_SUCCESS:
            return{...state, cart_obj: action.cart, loadingData:false}
        case ShoppingActionType.FETCH_CART_BY_USER_ERROR:
            return{...state,loadingData:false};

        case ShoppingActionType.FETCH_DRUGS_BY_CART_REQUEST:
            return{...state, loadingData:true}
        case ShoppingActionType.FETCH_DRUGS_BY_CART_SUCCESS:
            return{...state, data: action.drugs, loadingData:false}
        case ShoppingActionType.FETCH_DRUGS_BY_CART_ERROR:
            return{...state, loadingData:false}

        case ShoppingActionType.CREATE_CART_REQUEST:
            return{...state,loadingData:true}
        case ShoppingActionType.CREATE_CART_SUCCESS:
            return {...state, cart_obj: action.cart, loadingData:false}
        case ShoppingActionType.CREATE_CART_ERROR:
            return {...state,loadingData:false}

        case ShoppingActionType.ADD_DRUG_TO_CART_REQUEST:
            return{...state,loadingData:true}
        case ShoppingActionType.ADD_DRUG_TO_CART_SUCCESS:
            const newCart = state.data.map(it=>it);
            newCart.push(action.object.drug);
            return{...state, data:newCart, loadingData:false}
        case ShoppingActionType.ADD_DRUG_TO_CART_ERROR:
            return {...state, loadingData:false}

        case ShoppingActionType.DELETE_DRUG_FORM_CART_REQUEST:
            return {...state,loadingData:true}
        case ShoppingActionType.DELETE_DRUG_FORM_CART_SUCCESS:
            const filteredCart = state.data.filter(it=> it._id!=action.object.drug._id);
            return{...state, data:filteredCart, loadingData:false}
        case ShoppingActionType.DELETE_DRUG_FORM_CART_ERROR:
            return{...state,loadingData:false}

        default:
             return state

    }
}