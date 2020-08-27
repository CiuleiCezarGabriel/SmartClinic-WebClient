import { combineReducers } from 'redux';
import {authentification} from './authentificationReducer'
import {registration} from './registrationReducer'
import {questions} from './questionReducer'
import {appointments} from './appointmentReducer'
import {getDoctors} from './doctorReducer'

const rootReducer = combineReducers({
    authentification,
    registration,
    questions,
    appointments,
    getDoctors
})

export default rootReducer