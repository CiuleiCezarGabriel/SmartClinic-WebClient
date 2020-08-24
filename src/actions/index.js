import { UserActionTypes, login, logout, register} from './userActions';
import { AlertActionType, success, error, clear } from './alertActions'
import { QuestionActionsType, fetchQuestions, addQuestion, updateResponse} from './questionActions'
import { AppointmentActionsType, fetchAppointments} from './appointmentActions'


export {
    UserActionTypes,
    login,
    logout,
    register,

    AlertActionType,
    success,
    error,
    clear,

    QuestionActionsType,
    fetchQuestions,

    AppointmentActionsType,
    fetchAppointments,
    addQuestion,
    updateResponse
}