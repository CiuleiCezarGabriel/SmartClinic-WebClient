import React from 'react'
import { useEffect, useState } from 'react'
import { updateResponse, updateStatus } from '../actions';
import { useDispatch, useSelector } from 'react-redux'

function Question(props) {

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

    function handleStatusSelect(e) {
        const { name, value } = e.target;
        dispatch(updateStatus(props.questionId, value))
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
                <div>
                    {
                        props.response == " " ?
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
                    <select name="role" value={status} onChange={handleStatusSelect}>
                        <option value="CURENT_STATUS">{props.status}</option>
                        <option value="UNANSWERED">ACCEPT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
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
                    <div>
                        Response  <label> {props.response} </label>
                    </div>
                </div>
            }
        </div>
    )
}

export default Question
