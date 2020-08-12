import React from 'react'
import { logout } from '../actions'
import { useDispatch } from 'react-redux'

function NavBar() {

    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout)
    }

    return (
        <div>
            <div>
                <button type="button" onClick={() => handleLogout()} > LOGOUT </button>
            </div>
        </div>
    )
}

export default NavBar