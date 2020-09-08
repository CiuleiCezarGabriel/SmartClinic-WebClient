import React from 'react'
import Question from '../components/question/Question'
import { fetchQuestions, addQuestion } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        marginBottom: '20px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: '30px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function QuestionPage() {
    const classes = useStyles();

    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.data)
    const user = useSelector(state => state.authentification.user)
    const [question, setQuestion] = useState("")
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

    useEffect(() => {
    }, [questions])

    function handleChange(e) {
        const { value } = e.target;
        setQuestion(value)
    }

    function handleSubmit(e) {

        inputs.question = question
        e.preventDefault();
        dispatch(addQuestion(inputs))
        console.log(inputs)
        document.getElementById("outlined-search").value = ""
    }
    return (
        <div>
            {user.role == "PATIENT"
                &&
                <div>
                    <form id="form" onSubmit={handleSubmit}>
                        <TextField id="outlined-search" value={question} name={question} onChange={handleChange} type="search" variant="outlined" />
                        <button className="btn btn-primary" style={{ marginLeft: '20px', marginTop: '7px' }}>
                            Add Question
                        </button>
                        <div className="form-group">
                            <div style={{ marginTop: '50px', marginBottom: '30px' }}>
                                <h3>See others questions</h3>
                            </div>
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
