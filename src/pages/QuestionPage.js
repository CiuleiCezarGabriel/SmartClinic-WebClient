import React from 'react'
import Question from '../components/question/Question'
import { fetchQuestions, addQuestion } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

function QuestionPage() {

    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.data)
    const user = useSelector(state => state.authentification.user)
    console.log(questions)
    const { question, setQuestion } = useState([])
    const [inputs, setInputs] = useState({
        question: "",
        response: " ",
        userId: user._id,
        status: "PENDING",
        doctorId: ""
    })

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addQuestion(inputs))
        document.getElementById("question").value = ""
    }
    return (
        <div>
            {user.role == "PATIENT"
                &&
                <div>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Question</label>
                            <input type="text" id="question" name="question" value={question} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                Add Question
                            </button>
                        </div>
                    </form>
                </div>

            }
            {   
                questions.map((question, i) => {
                    return <div key={i}> <Question question={question.question}
                        questionId={question._id}
                        userRole={user.role}
                        response={question.response}
                        status={question.status}
                    >
                    </Question>
                    </div>
                })
            }

        </div>
    )
}

export default QuestionPage
