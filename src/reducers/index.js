import { combineReducers } from 'redux';
import {authentification} from './authentificationReducer'
import {registration} from './registrationReducer'
import {questions} from './questionReducer'
import {appointments} from './appointmentReducer'
import {getDoctors} from './doctorReducer'
import {diagnosis} from './diagnosisReducer'
import {pharmacies} from './pharmacyReducer'
import {users} from './usersReducer'
import {shopping} from './shoppingReducer'

const rootReducer = combineReducers({
    authentification,
    registration,
    questions,
    appointments,
    getDoctors,
    diagnosis,
    pharmacies,
    users,
    shopping,
})

export default rootReducer