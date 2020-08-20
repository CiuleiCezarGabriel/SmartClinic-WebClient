import { QuestionActionsType } from '../actions/questionActions'

const questionsInitialState = {
    loadingQuestion: false,
    data: []
}

export function questions(state = questionsInitialState, action) {
    switch (action.type) {
        case QuestionActionsType.FETCH_REQUEST_QUESTIONS:
            return { ...state, loadingQuestion: true }
        case QuestionActionsType.FETCH_QUESTIONS_SUCCESS:
            console.log(action.questions)
            return { ...state, data: action.questions, loadingQuestion: false }
        case QuestionActionsType.FETCH_QUESTIONS_ERROR:
            return { ...state, data: [], loadingQuestion: false }
    }
    return state;
}

