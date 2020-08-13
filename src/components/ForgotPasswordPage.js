import React from 'react'
import { userService } from '../services'

function ForgotPasswordPage() {

    const [email, setEmail] = React.useState([])

    function handleSubmit(e) {
        e.preventDefault();
        userService.forgotPassword(email)
    }

    function handleChange() {
        setEmail(document.getElementById("email").value)
    }

    return (
        <div>
            <div>
                <h2> Reset Password Page</h2>
                <form id="form" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" id="email" onChange={handleChange} />
                    <button className="btn btn-primary">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordPage