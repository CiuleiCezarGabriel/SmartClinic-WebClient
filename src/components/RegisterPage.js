import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../actions'

function RegisterPage() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        confirmed: 'false',
        role: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch()

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        console.log(user)
        if (user.firstName && user.lastName && user.username && user.password && user.role && user.email) {
            dispatch(register(user));
        }
        else{
            alert('Please complete all fields!')
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Register</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                </div>
                <label> Choose a role</label>
                <select name="role" value={user.role} onChange={handleChange}>
                    <option value="ADMIN">Admin</option>
                    <option value="DOCTOR">Doctor</option>
                    <option value="PATIENT">Patient</option>
                </select>
                <Link to="/login" className="btn btn-link">Cancel</Link>
            </form>
        </div>
    )
}

export default RegisterPage