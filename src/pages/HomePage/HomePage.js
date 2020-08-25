import React from 'react';
import './homepage.scss';
//import DespreNoi from '../../components/DespreNoi/DespreNoi';
import PictureContent from '../../components/PictureContent/PictureContent';

function HomePage() {

    return (
        <div class="totherightt">
            <PictureContent></PictureContent>
          {/* <DespreNoi></DespreNoi>
            Aici mai trebuie urmatoarele componente: 1. info despre importanta contului
                                                        2.   buton redirectionare pagina register || login
                                                        3. Servicii
                                                        4. Farmacii
                                                        5. Newsletter*/}
        </div>
    )
}

export default HomePage;