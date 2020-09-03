const BASE_SERVICE_URL = "http://localhost:9004/diagnosis";

function addDiagnosis(diagnosis) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(diagnosis)
    }

    return fetch(`${BASE_SERVICE_URL}/post`, requestOptions)
}

function findDiagnosisByAppointment(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${BASE_SERVICE_URL}/getByAppointmentId/${id}`, requestOptions)
}

function addDrugPrescription(drugPrescription){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${BASE_SERVICE_URL}/addDrugPrescription`, requestOptions)
}

function deleteDrugPrescription(diagnosis,drugPrescription){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${BASE_SERVICE_URL}/deleteDrugPrescription/:${diagnosis}/:${drugPrescription}`, requestOptions)
}

export default {
    addDiagnosis,
    findDiagnosisByAppointment,
    addDrugPrescription,
    deleteDrugPrescription
}; 

