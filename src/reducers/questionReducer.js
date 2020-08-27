import { QuestionActionsType } from '../actions/questionActions'

const questionsInitialState = {
    loadingQuestion: false,
    loadingRating: true,
    data: []
}

export function questions(state = questionsInitialState, action) {
    switch (action.type) {
        case QuestionActionsType.FETCH_REQUEST_QUESTIONS:
            return { ...state, loadingQuestion: true }
        case QuestionActionsType.FETCH_QUESTIONS_SUCCESS:
            return { ...state, data: action.questions, loadingQuestion: false }
        case QuestionActionsType.FETCH_QUESTIONS_ERROR:
            return { ...state, data: [], loadingQuestion: false }
        case QuestionActionsType.ADD_QUESTION_REQUEST:
            return { ...state, loadingQuestion: false }
        case QuestionActionsType.ADD_QUESTION_SUCCESS:
            return { ...state, loadingQuestion: false }
        case QuestionActionsType.ADD_QUESTION_ERROR:
            return { ...state, loadingQuestion: false }
        case QuestionActionsType.UPDATE_QUESTION_STATUS_REQUEST:
            return { ...state, loadingQuestion: false }
        case QuestionActionsType.UPDATE_QUESTION_STATUS_SUCCESS:
            return { ...state, loadingQuestion: false }
        case QuestionActionsType.UPDATE_QUESTION_STATUS_ERROR:
            return { ...state, loadingQuestion: false }
    }
    return state;
}

