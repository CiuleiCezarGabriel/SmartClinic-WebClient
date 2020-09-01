import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions'
import './registerpage.scss';
function RegisterPage() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: 'adam',
        username: '',
        password: '',
        phone: '',
        email: '',
        confirmed: 'false',
        role: 'PATIENT',
        medical_history: '',
        information: ''
    })
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch()

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (user.firstName && user.lastName && user.username && user.password && user.role && user.email) {
            dispatch(register(user));
        }
        else {
            alert('Please complete all fields!')
        }
    }

    return (
        <div>

            <div class="relative flex-grow">

                <div class="MuiPaper-root MuiCard-root px-6 pt-2 pb-4 MuiPaper-elevation1 MuiPaper-rounded " /*style={{ position: "relative", left: "-240px", bottom: "220px" }}*/>
                    <div>
                        <h2>Register</h2>
                        <form>
                            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6">
                                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="firstName" type="text" class="MuiInputBase-input MuiInput-input"  value={user.firstName} onChange={handleChange} placeholder="First Name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="lastname" type="text" class="MuiInputBase-input MuiInput-input"  value={user.lastName} onChange={handleChange} placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="username" type="text" class="MuiInputBase-input MuiInput-input"  value={user.username} onChange={handleChange} placeholder="UserName" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="email" type="email" class="MuiInputBase-input MuiInput-input"  value={user.email} onChange={handleChange} placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="password" type="password" class="MuiInputBase-input MuiInput-input"  value={user.password} onChange={handleChange} placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="phone" type="text" class="MuiInputBase-input MuiInput-input"  value={user.phone} onChange={handleChange} placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="medical_history" type="text" class="MuiInputBase-input MuiInput-input"  value={user.medical_history} onChange={handleChange} placeholder="Medical History" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="MuiFormControl-root MuiTextField-root mb-4 w-full">
                                            <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false"></label>
                                            <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                                                <input aria-invalid="false" name="information" type="text" class="MuiInputBase-input MuiInput-input"  value={user.information} onChange={handleChange} placeholder="Informations" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button onClick = {handleSubmit} className="btn btn-primary">
                                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                Register
                                            </button>
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
{/*<div class="relative flex-grow">
            <div class="m-sm-30">
                <div class="MuiPaper-root MuiCard-root px-6 pt-2 pb-4 MuiPaper-elevation1 MuiPaper-rounded">
                    <h2>Register</h2>
                    <form name="form" onSubmit={handleSubmit}>
                        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6">
                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
                               {/* <div class="MuiFormControl-root MuiTextField-root mb-6 w-full">
                                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true">Email</label>
                                    <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                        <input aria-invalid="false" name="email" type="email" class="MuiInputBase-input MuiOutlinedInput-input" 
                                                value="" autocomplete="off" 
                                                style={{backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)", 
                                                backgroundRepeat: "no-repeat", 
                                                backgroundAttachment: "scroll", 
                                                backgroundSize: "16px 18px", 
                                                backgroundPosition: "98% 50%", 
                                                cursor: "auto"}}></input>
                                        <fieldset aria-hidden="true" class="jss1812 MuiOutlinedInput-notchedOutline">
                                            <legend class="jss1814 jss1815">
                                                <span>Email</span>
                                            </legend>
                                        </fieldset>
                                    </div>

                                </div>
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
                                    <label>Medical history</label>
                                    <input type="text" name="medical_history" value={user.medical_history} onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Informations</label>
                                    <input type="text" name="information" value={user.information} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">
                                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        Register
                                    </button>
                                </div>
                                <Link to="/login" className="btn btn-link">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
*/}