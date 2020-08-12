import { combineReducers } from 'redux';
import {authentification} from './authentificationReducer'
import {registration} from './registrationReducer'

const rootReducer = combineReducers({
    authentification,
    registration
})

export default rootReducer