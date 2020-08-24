import React from 'react'
import { useEffect, useState } from 'react'
import { updateResponse } from '../actions';
import { useDispatch, useSelector } from 'react-redux'

function Question(props) {
    console.log(props)
    const [response, setResponse] = useState([])
    const dispatch = useDispatch()

    const doctor = useSelector(state => state.authentification.doctor)

    function handleChange(e) {
        const { name, value } = e.target;
        setResponse(response => value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateResponse(props.questionId, doctor._id, response))
        window.location.reload(false);
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <div>
                Question <label> {props.question} </label>
            </div>
            {props.userRole == "ADMIN"
                &&
                <div> ADMIN </div>
                &&
                <div>
                    {
                        props.response == " " || props.response == null ?
                            <div>

                            </div>
                            :
                            <div>
                                Response  <label> {props.response} </label>
                            </div>
                    }
                </div>
                &&
                <div>
                    {props.status}
                </div>
            }
            {props.userRole == "DOCTOR"
                &&
                <div>
                    {
                        props.response == " " ?
                            <div>
                                <form id="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Response</label>
                                        <input type="text" name="response" value={response} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">
                                            Add Response
                            </button>
                                    </div>
                                </form>
                            </div>
                            :
                            <div>
                                Response  <label> {props.response} </label>
                            </div>
                    }
                </div>
            }
            {props.userRole == "PATIENT"
                &&
                <div>
                    <div> PATIENT </div>
                    <div>
                        Response  <label> {props.response} </label>
                    </div>
                </div>
            }
        </div>
    )
}

export default Question
