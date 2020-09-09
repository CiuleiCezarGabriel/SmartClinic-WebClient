const BASE_SERVICE_URL = "http://localhost:9003/pharmacy"

const fetchPharmacies = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    return fetch(`${BASE_SERVICE_URL}`, requestOptions)
}

const getDrugs = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    return fetch(`${BASE_SERVICE_URL}/drug`, requestOptions)
}

const addPharmacy = (pharmacy) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(pharmacy)
    };
    console.log(requestOptions.body)
    return fetch(`${BASE_SERVICE_URL}`, requestOptions)
}

const deletePharmacy = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    return fetch(`${BASE_SERVICE_URL}/${id}`, requestOptions)
}

const fetchDrugsOfPharmacy = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    return fetch(`${BASE_SERVICE_URL}/drug/pharmacy/:id`, requestOptions)
}

const addDrugToPharmacy = (pharmacy, drug) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    return fetch(`${BASE_SERVICE_URL}/add/Drug/:${pharmacy}/:${drug}`, requestOptions)
}

const addNewDrugToPharmacy = (pharmacy, drug) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(drug)
    };

    return fetch(`${BASE_SERVICE_URL}/add/newDrug/${pharmacy}`, requestOptions)
}

const fetchAllDrugs = () =>{
  
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }
    return fetch(`${BASE_SERVICE_URL}/drug`, requestOptions)
}

export default {
    fetchPharmacies,
    addPharmacy,
    deletePharmacy,
    fetchDrugsOfPharmacy,
    addDrugToPharmacy,
    addNewDrugToPharmacy,
    fetchAllDrugs
}