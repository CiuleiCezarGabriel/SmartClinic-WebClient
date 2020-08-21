const BASE_SERVICE_URL = "http://localhost:9002/appointment";

const fetchAppointments = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        }
    }
    return fetch(`${BASE_SERVICE_URL}/appointment`, requestOptions);
}

export default { 
    fetchAppointments
}; 