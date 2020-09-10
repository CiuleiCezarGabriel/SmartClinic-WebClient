const BASE_SERVICE_URL = "http://localhost:9004/diagnosis";

function addDiagnosis(diagnosis) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(diagnosis)
    }

    return fetch(`${BASE_SERVICE_URL}/insert`, requestOptions)
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
        body: JSON.stringify(drugPrescription)
    }

    return fetch(`${BASE_SERVICE_URL}/addDrugPrescription`, requestOptions)
}

function deleteDrugPrescription(drugPrescription, diagnosis){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${BASE_SERVICE_URL}/deleteDrugPrescription/${diagnosis}/${drugPrescription}`, requestOptions)
}

function findPrescriptionByDiagnosis(diagnosis){
    const requestOptions = {
        method: 'GET',
        headers: {'Content-type' : 'application/json'},
    }
    return fetch(`http://localhost:9004/prescription/getByDiagnosisId/${diagnosis}`, requestOptions);
}

export default {
    addDiagnosis,
    findDiagnosisByAppointment,
    addDrugPrescription,
    deleteDrugPrescription,
    findPrescriptionByDiagnosis
}; 

