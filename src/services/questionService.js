const BASE_SERVICE_URL = "http://localhost:9001"

const fetchQuestions = () => {
    return fetch(`${BASE_SERVICE_URL}/question/getAll`)
}

export default { 
    fetchQuestions
}; 
    