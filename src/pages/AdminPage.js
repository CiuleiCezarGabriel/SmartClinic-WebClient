import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { history } from '../utils'

function AdminPage() {

    function addUser() {
        history.push('./registerNewUser')
    }

    return (
        <div>
            <NavBar />
            <div>
                Admin Page
                <button onClick={addUser}> Add user</button>
            </div>
        </div>
    )
}

export default AdminPage