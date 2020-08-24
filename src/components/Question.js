import React from 'react'

function Question(props) {
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
                    {props.status}
                </div>
            }
            {props.userRole == "DOCTOR"
                &&
                <div>
                    {
                        props.response == " " ?
                            <div>
                                Response <input type="text" />
                                <button > Send Response</button>

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
