import React from 'react'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.scss'
import InfoBar from '../InfoBar/InfoBar.js';
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

let socket;
const ENDPOINT = 'localhost:5000'

function Chat(props) {

    console.log(props)

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const name = props.name
        const room = props.room

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, () => {

        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT])

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
    }, [])

    const sendMessage = (event) => {
        event.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(' '))
        }
    }

    console.log(messages)

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name}></Messages>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat 