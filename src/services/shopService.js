const BASE_SERVICE_URL = "http://localhost:9006/shopping/cart"

function createCart(cart) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(cart)
    }
    return fetch(`${BASE_SERVICE_URL}`, requestOptions)
}

function getCartByUser(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return fetch(`${BASE_SERVICE_URL}/user/${id}`, requestOptions)
}


function getAllDrugsCart(id){
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return fetch(`${BASE_SERVICE_URL}/drugs/${id}`, requestOptions)
}

function addDrugToCart(drugCart){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(drugCart)
    }
    return fetch(`${BASE_SERVICE_URL}/addDrug`, requestOptions)
}

function deleteDrugFromCart(drugId,cartId){
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }
    return fetch(`${BASE_SERVICE_URL}/${cartId}/${drugId}`, requestOptions)
}

export const ShoppingService = {
    createCart,
    getCartByUser,
    getAllDrugsCart,
    addDrugToCart,
    deleteDrugFromCart
}

