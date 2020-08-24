import React from 'react'
import Question from '../components/Question'
import { fetchQuestions } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

function QuestionPage() {

    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.data)
    const user = useSelector(state => state.authentification.user)
    
    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])

    return (
        <div>
            <div><button onClick={() => this.onGetQuestions()}>Get my questions</button></div>
                Question list:
            <div>
                {
                    questions.map((question, i) => {
                        return <div key={i}> <Question question={question.question}
                            userRole={user.role}
                            response={question.response}
                            status={question.status}>
                        </Question>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default QuestionPage
