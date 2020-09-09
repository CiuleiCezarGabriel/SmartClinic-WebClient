const BASE_SERVICE_URL = "http://localhost:9000/auth"

export const DoctorService = {
    getDoctors
}

function getDoctors() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return fetch(`${BASE_SERVICE_URL}/doctor`, requestOptions)
}

