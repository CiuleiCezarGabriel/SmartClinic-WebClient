import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { register } from '../actions'
import './registeruserpage.scss'

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
            <form name="form" onSubmit={handleSubmit}>
                <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label> {/*First name*/}
                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input aria-invalid="false" name="firstName" type="text" class="MuiInputBase-input MuiInput-input" placeholder="First Name" value={user.firstName} onChange={handleChange} />
                    </div>
                </div>
                <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input aria-invalid="false" name="lastName" type="text" class="MuiInputBase-input MuiInput-input" placeholder="Last Name" value={user.lastName} onChange={handleChange} />
                    </div>
                </div>
                <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input aria-invalid="false" name="username" type="text" class="MuiInputBase-input MuiInput-input" placeholder="User Name" value={user.username} onChange={handleChange} />
                    </div>
                </div>
                <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input aria-invalid="false" name="password" type="text" class="MuiInputBase-input MuiInput-input" placeholder="Password" value={user.password} onChange={handleChange} />
                    </div>
                </div>
                <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input aria-invalid="false" name="phone" type="text" class="MuiInputBase-input MuiInput-input" placeholder="Phone" value={user.phone} onChange={handleChange} />
                    </div>
                </div>
                <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input aria-invalid="false" name="email" type="text" class="MuiInputBase-input MuiInput-input" placeholder="Email" value={user.email} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    {selected
                        && <div>
                            <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                                <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                    <input aria-invalid="false" name="speciality" type="text" class="MuiInputBase-input MuiInput-input" placeholder="Speciality" value={user.speciality} onChange={handleChange} />
                                </div>
                            </div>
                            <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"></label>
                                <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                    <input aria-invalid="false" name="room" type="text" class="MuiInputBase-input MuiInput-input" placeholder="Room" value={user.room} onChange={handleChange} />
                                </div>
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
                <label> Choose a role: </label>
                <select name="role" class="" style={{width: "30%",padding: "8px 15px" }} value={user.role} onChange={handleUserSelect}>
                    <option value="ADMIN">Admin</option>
                    <option value="DOCTOR">Doctor</option>
                </select>
            </form>
        </div>
    )
}

export default RegisterUserPage