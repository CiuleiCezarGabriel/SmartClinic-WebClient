import React from 'react';
import './homepage.scss';
import DespreNoi from '../../components/DespreNoi/DespreNoi';
import Simptome from '../../components/Simptome/simptome';
import Farmacii from '../../components/Farmacii/Farmacii';
import { useState, useEffect } from 'react';
import Chat from '../../components/Chat/Chat';
import PictureContent from '../../components/PictureContent/PictureContent';

function HomePage() {

    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false)

    let room1 = Math.random().toString(36).substring(7);

    function openFormMessage(e) {

        e.preventDefault()
        setVisible(true)
        document.getElementById("intro").style.display = "none";
    }

    function openForm(e) {
        e.preventDefault()

        setVisible(false)
        document.getElementById("myForm").style.display = "block";
        document.getElementById("intro").style.display = "block";
    }

    function closeForm(e) {
        e.preventDefault()
        document.getElementById("myForm").style.display = "none";
    }

    useEffect(() => {
        console.log(name)
    }, [visible])

    return (
        
        <div class="totherightt">
            {/*<Slideshow></Slideshow>*/}
            <PictureContent></PictureContent>
            <DespreNoi></DespreNoi>
            <Simptome></Simptome>
            <Farmacii></Farmacii>
            <button class="open-button" onClick={(e) => openForm(e)}>Chat</button>
            <div class="chat-popup" id="myForm">
                <form class="form-container">
                    <h1>Chat</h1>

                    <div id="intro">
                        <label ><b>Name</b></label>
                        <input placeholder="Type your name.." value={name} onChange={(event) => setName(event.target.value)} required></input>
                        <button type="submit" class="btn" onClick={(e) => openFormMessage(e)}>Enter chat</button>
                    </div>

                    <div id="chat">

                    </div>

                    {
                        visible 
                        &&
                        <div>
                            <Chat
                                name={name}
                                room={room1}
                            />
                        </div>
                    }
                    <button type="button" class="btn cancel" onClick={(e) => closeForm(e)}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;