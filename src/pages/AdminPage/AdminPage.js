import React, { useReducer } from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client'
import Chat from '../../components/Chat/Chat'
import './AdminPage.scss'
import { fetchQuestions, addQuestion, getUsers, deleteUser, UserActionTypes } from '../../actions';
import MaterialTable from 'material-table';
import { useRadioGroup } from '@material-ui/core';

let socket;
const ENDPOINT = 'localhost:5000'

function AdminPage() {

    const dispatch = useDispatch()

    const [admin, setAdmin] = useState('admin')
    const [rooms, setRooms] = useState([])
    const [room, setRoom] = useState('')
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit('adminJoin')

        socket.on('roomsOnline', rooms => {
            setRooms(rooms)
            console.log(rooms)
        });

        dispatch(getUsers())
    }, [])

    const users = useSelector(state => state.users.data)


    useEffect(() => {
        socket = io(ENDPOINT)
        socket.on('roomsChanged', rooms => {
            setRooms(rooms)
            console.log('11')
        })
    }, [rooms])

    function openRoom(room) {
        setRoom(room)
        setVisible(true)
    }

    function openForm(e) {
        e.preventDefault()
    }

    function closeForm(e) {
        e.preventDefault()
        setVisible(false)
    }

    function handleDelete(id) {
        console.log('111')
        dispatch(deleteUser(id))
    }

    useEffect(() => {
    }, [visible])

    const [state, setState] = React.useState({
        columns: [
            { title: 'Username', field: 'username' },
            { title: 'FirstName', field: 'firstName' },
            { title: 'LastName', field: 'lastName' },
            { title: 'Phone', field: 'phone' },
            { title: 'Email', field: 'email' },
            { title: 'Role', field: 'role' },
            { title: 'Phone', field: 'phone' },
        ],
        data: users.map(user => {
            if (user === null) {
                return {
                    username: ' ',
                    firstName: ' ',
                    lastName: ' ',
                    phone: ' ',
                    email: ' ',
                    role: ' ',
                    confirmed: ' '
                }
            }
            return {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                role: user.role,
                confirmed: user.confirmed
            }
        })
    });

    useEffect(() => {
        setState({
            columns: [
                { title: 'Username', field: 'username' },
                { title: 'FirstName', field: 'firstName' },
                { title: 'LastName', field: 'lastName' },
                { title: 'Phone', field: 'phone' },
                { title: 'Email', field: 'email' },
                { title: 'Role', field: 'role' },
                { title: 'Phone', field: 'phone' },
            ],
            data: users.map(user => {
                if (user === null) {
                    return {
                        username: ' ',
                        firstName: ' ',
                        lastName: ' ',
                        phone: ' ',
                        email: ' ',
                        role: ' ',
                        confirmed: ' '
                    }
                }
                return {
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                    role: user.role,
                    confirmed: user.confirmed,
                    id : user._id
                }
            })
        })
    }, [users])


    return (
        <div>
            {
                rooms.map((room, i) =>
                    <div key={i}>
                        <label> {room} </label>
                        <div>
                            <button onClick={(e) => { openRoom(room), openForm(e) }}> Open Chat </button>
                        </div>
                    </div>
                )
            }

            <div>
                <div class="totherightt">
                    <div>
                        <div>
                            {
                                visible
                                &&
                                <div class="chat-popup" id="myForm" style={{ display: visible ? 'block' : 'none' }}>
                                    <form class="form-container">
                                        <h1>Chat</h1>
                                        <div id="chat">
                                        </div>
                                        <div>
                                            <Chat
                                                name={admin}
                                                room={room}
                                            />
                                        </div>
                                        <button type="button" class="btn cancel" onClick={(e) => closeForm(e)}>Close</button>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MaterialTable
                    title="Users"
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    console.log(oldData)
                                    handleDelete(oldData.id)
                                }, 600);
                            }),
                    }}
                />
            </div>
        </div >
    )
}

export default AdminPage