import React, { Fragment } from 'react';
import './homepage.scss';
import DespreNoi from '../../components/DespreNoi/DespreNoi';
//import PictureContent from '../../components/PictureContent/PictureContent';
import Simptome from '../../components/Simptome/simptome'
import Farmacii from '../../components/Farmacii/Farmacii';
import BottomBar from '../../components/BottomBar/BottomBar';

function HomePage() {

    return (
        
        <div class="totherightt">
            <DespreNoi></DespreNoi>
            <Simptome></Simptome>
            <Farmacii></Farmacii>
           
        </div>
    )
}

export default HomePage;