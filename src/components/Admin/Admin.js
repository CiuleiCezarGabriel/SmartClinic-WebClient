import React from 'react'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'

let socket;
const ENDPOINT = 'localhost:5000'

function Admin() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        socket = io(ENDPOINT)
        socket.emit('adminJoin')

    }, [])

    useEffect(() => {
        socket.on('roomsOnline', rooms => {
            setRooms(rooms)
        });
    }, [])

    const admin = 'admin'
    return (
        <div>
            {
                rooms.map((room, i) =>
                    <div key={i}>
                        <label> {room} </label>
                        <Link to={`/chat?name=${admin}&room=${room}`}>
                            <div>
                                <button> Open Chat </button>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Admin