const BASE_SERVICE_URL = "http://localhost:9002/appointment";

const fetchAppointments = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        }
    }
    return fetch(`${BASE_SERVICE_URL}`, requestOptions);
}

const fetchAppointmentsByDoctor = (id) => {
    const user = localStorage.getItem('user')
    const userJson = JSON.parse(user)
    const role = userJson.role
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ role})
    };
    return fetch(`${BASE_API_URL}/${id}`);
}

export default { 
    fetchAppointments,
    fetchAppointmentsByDoctor
}; 