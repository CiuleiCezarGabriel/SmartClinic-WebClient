const BASE_SERVICE_URL = "http://localhost:9001"

const fetchQuestions = () => {
    const user = localStorage.getItem('user')
    const userJson = JSON.parse(user)
    const role = userJson.user.role
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ role })
    };
    return fetch(`${BASE_SERVICE_URL}/question/getAll`, requestOptions)
}

const addQuestion = (question) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(question)
    };
    return fetch(`${BASE_SERVICE_URL}/question/insert`, requestOptions)
}

const updateResponse = (id, doctorId, response) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ doctorId, response, status: "ANSWERED" })
    };
    return fetch(`${BASE_SERVICE_URL}/question/updateResponse/${id}`, requestOptions)
}

const updateStatus = (id, status) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ status })
    };
    return fetch(`${BASE_SERVICE_URL}/question/updateStatus/${id}`, requestOptions)
}

const getAverageRating = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    return fetch(`${BASE_SERVICE_URL}/review/getAverageRating/${id}`, requestOptions)
}

const addRating = (params) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(params)
    };

    return fetch(`${BASE_SERVICE_URL}/review/insert`, requestOptions)
}

export default {
    fetchQuestions,
    addQuestion,
    updateResponse,
    updateStatus,
    getAverageRating,
    addRating
};
