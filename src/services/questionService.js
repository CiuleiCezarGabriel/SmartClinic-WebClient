const BASE_SERVICE_URL = "http://localhost:9001"

const fetchQuestions = () => {
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
    return fetch(`${BASE_SERVICE_URL}/question/getAll`, requestOptions)
}

export default { 
    fetchQuestions
}; 
    