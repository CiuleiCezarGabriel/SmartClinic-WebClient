import QuestionService from '../services/questionService'
import { responseToJson } from '../utils';

export const QuestionActionsType = {
    FETCH_REQUEST_QUESTIONS: "FETCH_REQUEST_QUESTIONS",
    FETCH_QUESTIONS_SUCCESS: "FETCH_QUESTIONS_SUCCESS",
    FETCH_QUESTIONS_ERROR: "FETCH_QUESTIONS_ERROR",

    ADD_QUESTION_REQUEST: 'ADD_QUESTION_REQUEST',
    ADD_QUESTION_SUCCESS: 'ADD_QUESTION_SUCCESS',
    ADD_QUESTION_ERROR: 'ADD_QUESTION_ERROR',

    UPDATE_QUESTION_REQUEST: 'UPDATE_QUESTION_REQUEST',
    UPDATE_QUESTION_SUCCESS: 'UPDATE_QUESTION_SUCCESS',
    UPDATE_QUESTION_ERROR: 'UPDATE_QUESTION_ERROR'
}

export function requestQuestions() {
    return {
        type: QuestionActionsType.FETCH_REQUEST_QUESTIONS,
    }
}

export function fetchQuestionsSuccess(questions) {
    return {
        type: QuestionActionsType.FETCH_QUESTIONS_SUCCESS,
        questions
    }
}

export function fetchQuestionsError(error) {
    return {
        type: QuestionActionsType.FETCH_QUESTIONS_ERROR,
        error
    }
}

export function fetchQuestions() {
    return dispatch => {
        dispatch(requestQuestions())
        return QuestionService.fetchQuestions()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchQuestionsSuccess(json)))
            .catch(error => {
                dispatch(fetchQuestionsError(error))
            })
    }
}

export function addQuestionRequest() {
    return {
        type: QuestionActionsType.ADD_QUESTION_REQUEST
    }
}

export function addQuestionSuccess() {
    return {
        type: QuestionActionsType.ADD_QUESTION_SUCCESS
    }
}

export function addQuestionError(error) {
    return {
        type: QuestionActionsType.ADD_QUESTION_ERROR,
        error
    }
}









