import { combineReducers } from 'redux';
import {authentification} from './authentificationReducer'
import {registration} from './registrationReducer'
import {questions} from './questionReducer'
import {appointments} from './appointmentReducer'


const rootReducer = combineReducers({
    authentification,
    registration,
    questions,
    appointments
})

export default rootReducer