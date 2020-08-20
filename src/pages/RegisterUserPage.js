import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { register } from '../actions'

function RegisterUserPage() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        confirmed: 'false',
        role: 'ADMIN',
        speciality: '',
        room: ''
    })
    const [selected, setSelected] = useState(false)
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
        else {
            alert('Please complete all fields!')
        }
    }

    function handleUserSelect(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
        if (e.target.value === 'DOCTOR') {
            setSelected(true)
        }
        else {
            setSelected(false)
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
                <div>
                    {selected
                        && <div>
                            <div>
                                <label>Speciality</label>
                                <input type="text" name="speciality" value={user.speciality} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label>Room</label>
                                <input type="text" name="room" value={user.room} onChange={handleChange}></input>
                            </div>
                        </div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                </div>
                <label> Choose a role</label>
                <select name="role" value={user.role} onChange={handleUserSelect}>
                    <option value="ADMIN">Admin</option>
                    <option value="DOCTOR">Doctor</option>
                </select>
                <Link to="/login" className="btn btn-link">Cancel</Link>
            </form>
        </div>
    )
}

export default RegisterUserPage