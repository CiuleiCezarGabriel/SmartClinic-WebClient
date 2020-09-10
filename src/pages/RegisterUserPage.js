import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function RegisterUserPage() {
    const classes = useStyles();

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
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField id="standard-basic" label="First Name" name="firstName" value={user.firstName} onChange={handleChange} />
                </div>
                <div>
                    <TextField id="standard-basic" label="Last Name" value={user.lastName} onChange={handleChange} />
                </div>
                <div>
                    <TextField id="standard-basic" label="Username" value={user.username} onChange={handleChange} />
                </div>
                <div>
                    <TextField id="standard-basic" type="password" label="Password" value={user.password} onChange={handleChange} />
                </div>
                <div>
                    <TextField id="standard-basic" label="Phone" value={user.phone} onChange={handleChange} />
                </div>
                <div>
                    <TextField id="standard-basic" label="Email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    {selected
                        && <div>
                            <div>
                                <TextField id="standard-basic" label="Speciality" name="speciality" value={user.speciality} onChange={handleChange} />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Room" name="room" value={user.room} onChange={handleChange} />
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
                <h3> Choose a role</h3>
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