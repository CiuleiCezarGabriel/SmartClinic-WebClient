import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions'

function LoginPage() {

    const [inputs, setInputs] = React.useState({
        username: '',
        password: ''
    })
    const [submitted, setSubmitted] = React.useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentification.loggingIn)
    const dispatch = useDispatch()

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (username && password) {
            dispatch(login(username, password))
        }
    }

    return (
        <div>
            <h2> Login Page</h2>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                </div>
                <Link to="/register" className="btn btn-link">Register</Link>
                <div>
                    <Link to="/resetPassword" className="btn btn-link"> Reset password</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage