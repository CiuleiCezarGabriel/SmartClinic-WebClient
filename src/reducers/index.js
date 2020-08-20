import { combineReducers } from 'redux';
import {authentification} from './authentificationReducer'
import {registration} from './registrationReducer'
import {questions} from './questionReducer'

const rootReducer = combineReducers({
    authentification,
    registration,
    questions
})

export default rootReducer