import React from 'react'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Chat from '../../components/Chat/Chat'
import './AdminPage.scss'

let socket;
const ENDPOINT = 'localhost:5000'

function AdminPage() {

    const [admin, setAdmin] = useState('admin')
    const [rooms, setRooms] = useState([])
    const [room, setRoom] = useState('')
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit('adminJoin')

        socket.on('roomsOnline', rooms => {
            setRooms(rooms)
        });
    }, [])

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

    useEffect(() => {
    }, [visible])


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
        </div >
    )
}

export default AdminPage