import React from 'react';
import './services.scss';
import Dermatologie from './ServicesPages/Dermatologie/Dermatologie';
import Cardiologie from './ServicesPages/Cardiologie/Cardiologie';
import { history } from '../../utils';


function Services() {

   {/* function handleDermatologie() {
        history.push('/Services/ServicesPages/Dermatologie')
    }

    function handleCardiologie() {
        history.push('/Services/ServicesPages/Cardiologie')
    }

    function handleNutritie() {
        history.push('/Services/ServicesPages/Nutritie')
    }

    function handleUrologie() {
        history.push('/Services/ServicesPages/Urologie')
    }

    function handleNeurologie() {
        history.push('/Services/ServicesPages/Neurologie')
    }

    function handlePedriatie() {
        history.push('/Services/ServicesPages/Pedriatie')
    }*/}

    return (
        <div class="page-wrap">
            <div class="bg-light">
                <div class="row no-gutters dt-appear dt-full-box" data-isvisible="true">

                    <div class="col-12 col-sm-6 bg-light text-sm-right">
                        <div class="hs p-3 p-sm-5">
                            <h2 class="title dt-animate" data-class="fadeInRight">DERMATOLOGIE</h2>
                            <p class="card-text dt-animate" data-class="fadeInRight" >Dr. Adam Irina</p>
                            <p>Va trateaza</p>
                          {/*  <button id="myButton" class="btn btn-green btn-sm dt-animate" onClick={() => handleDermatologie()}>Vezi mai mult</button>
                        <a class="btn btn-green btn-sm dt-animate" data-class="fadeInUp" href="/Dermatologie" >Vezi mai mult</a>*/}
                        <button class="btn"><a class="btn-primary btn" href="/Dermatologie"> Vezi mai mult</a></button>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 bg-white">
                        <div class="hs p-3 p-sm-5">
                            <h2 class="title dt-animate" data-class="fadeInRight">CARDIOLOGIE</h2>
                            <p class="card-text dt-animate" data-class="fadeInRight">Dr. BUIA Ana-Maria - Consultaţie de specialitate şi gratuită, cu bilet de trimitere de la medicul de familie</p>
                            <br></br>
                              <p> Dr. Catalina Avram</p>
                              
                              <button class="btn"><a class="btn-primary btn" href="/Cardiologie"> Vezi mai mult</a></button>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 bg-white text-sm-right">
                        <div class="hs p-3 p-sm-5">
                            <h2 class="title dt-animate" data-class="fadeInRight">NUTRITIE</h2>
                            <p class="card-text dt-animate" data-class="fadeInRight" data-delay="300" >Dr. Someone Maria</p>
                            <br></br>
                                <p>Dr. CEUCA Lavinia</p>
                                <button class="btn"><a class="btn-primary btn" href="/Nutritie"> Vezi mai mult</a></button>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 bg-light">
                        <div class="hs p-3 p-sm-5">
                            <h2 class="title dt-animate" data-class="fadeInRight">UROLOGIE</h2>
                            <p class="card-text dt-animate" data-class="fadeInRight" data-delay="300" >Dr. FISCUTEAN Bianca</p>
                            <br></br>
                            <p>Consultaţie de specialitate şi gratuită, cu bilet de trimitere de la medicul de familie</p>
                            <button class="btn"><a class="btn-primary btn" href="/Urologie"> Vezi mai mult</a></button>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 bg-light text-sm-right">
                    <div class="hs p-3 p-sm-5">
                        <h2 class="title dt-animate" data-class="fadeInRight">NEUROLOGIE</h2>
                        <p class="card-text dt-animate" data-class="fadeInRight" >Dr. Danciu Vlad</p>
                        <p>Va face bine</p>
                        <button class="btn"><a class="btn-primary btn" href="/Neurologie"> Vezi mai mult</a></button>
                    </div>
                </div>

                <div class="col-12 col-sm-6 bg-white">
                        <div class="hs p-3 p-sm-5">
                            <h2 class="title dt-animate" data-class="fadeInRight">PEDRIATIE</h2>
                            <p class="card-text dt-animate" data-class="fadeInRight">Dr. Giurgiu Ana-Maria - Consultaţie de specialitate şi gratuită, cu bilet de trimitere de la medicul de familie</p>
                            <br></br>
                              <p> Dr. GROZA Ioana Carmen</p>
                              <button class="btn"><a class="btn-primary btn" href="/Pedriatie"> Vezi mai mult</a></button>
                        </div>
                </div>

               

                </div>
            </div>
        </div>
        

    )
}

export default Services;

{/*<div class="page-wrap">
        ssss
            <div class="bg-light">
                <div class="row no-gutters dt-appear dt-full-box" data-isvisible="true">
                    <div class="col-12 col-sm-6 bg-light text-sm-right">
                        
                    </div>
                </div>
            </div>
</div>*/}