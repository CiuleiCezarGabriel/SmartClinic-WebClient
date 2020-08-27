const BASE_SERVICE_URL = "http://localhost:9002/appointment";

const fetchAppointmentsByDoctorConfirmed = () => {
    const doctor = localStorage.getItem('doctor');
    const doctorJSON = JSON.parse(doctor);
    let id = doctorJSON[0]._id;
    console.log(id);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return fetch(`${BASE_SERVICE_URL}/doctor/confirmed/${id}`, requestOptions);
}

const fetchAppointmentsByDoctorUnconfirmed = () => {
    const doctor = localStorage.getItem('doctor');
    const doctorJSON = JSON.parse(doctor);
    let id = doctorJSON[0]._id;

    console.log(id);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return fetch(`${BASE_SERVICE_URL}/doctor/unconfirmed/${id}`, requestOptions);
}

const fetchAppointmentsByPatient = () => {

    const patient = localStorage.getItem('patient')
    const patientJSON = JSON.parse(patient)
    let id = patientJSON[0]._id;

    const requestOptionsPatient = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    };
    return fetch(`${BASE_SERVICE_URL}/patient/${id}`, requestOptionsPatient);

}

function addAppointment(appointment) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment)
    }

    return fetch(`${BASE_SERVICE_URL}/post`, requestOptions)
        .then(response => response.json)
}

function confirmAppointment(id){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(`${BASE_SERVICE_URL}/confirm/${id}`, requestOptions);
}

export default {
    fetchAppointmentsByDoctorConfirmed,
    fetchAppointmentsByDoctorUnconfirmed,
    fetchAppointmentsByPatient,
    addAppointment,
    confirmAppointment
}; 