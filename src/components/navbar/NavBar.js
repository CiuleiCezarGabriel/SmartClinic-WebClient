import React from 'react'
import './navbar.scss';
import { history } from '../../utils'
import Logo from '../../assets/images/SmartClinic.jpg'

function NavBar() {
    function handleClick() {
        history.push('/questions')
    }

    function handleAppointments() {
        history.push('/appointments')
    }

    function handleLogin() {
        history.push('/login')
    }

    function handleMedici(){
        history.push('/doctorList')
    }

    function handleHome() {
        history.push('/');
    }

    return (
        <div class="jss7658 jss7661">   {/*<div class="jss5875 jss5878">*/}
            <div class="flex-column relative h-full">
                <div class="flex items-center justify-between jss7662">
                    <div class="flex items-center justify-between jss5879">
                        <div class="flex items-center">
                            <span class="text-18 ml-2 font-medium sidenavHoverShow">
                                <span class="Logo" aria-hidden="true" onClick={() => handleHome()}>
                                    <img src={Logo} alt="Logo" style={{ width: "100px", height: "100px" }}></img>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="scrollbar-container relative px-4 jss1285 ps ps--active-y">
                    <div class="navigation">
                        <div>
                            <button class="MuiButtonBase-root-353 w-full" tabindex="0" type="button" name="child"><div class="nav-bullet p-2px rounded ml-5 mr-2 jss361"></div>
                                <div class="nav-bullet-text ml-5 text-11 hidden"></div>
                                <div class="mx-auto"></div><span class="MuiTouchRipple-root-371"></span>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-10142 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss10156" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-10143 align-middle text-18 w-36 px-4" aria-hidden="true">security</span>
                                    <span class="align-middle sidenavHoverShow jss10159" onClick={() => handleLogin()}> Autentificare</span>
                                </div>
                                <div class="item-arrow sidenavHoverShow jss10158 jss10153">
                                    <span class="material-icons MuiIcon-root-10143 align-middle MuiIcon-fontSizeSmall-10150" aria-hidden="true">chevron_right</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-4339 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss4371" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-4348 align-middle text-18 w-36 px-4" aria-hidden="true">shopping_basket</span>
                                    <span class="align-middle sidenavHoverShow jss4374">Farmacii</span>
                                </div>
                                <div class="item-arrow sidenavHoverShow jss4373 jss4368">
                                    <span class="material-icons MuiIcon-root-4348 align-middle MuiIcon-fontSizeSmall-4355" aria-hidden="true">chevron_right</span>
                                </div>
                                <span class="MuiTouchRipple-root-4357"></span>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-4339 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss4371" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-4348 align-middle text-18 w-36 px-4" aria-hidden="true">description</span>
                                    <span class="align-middle sidenavHoverShow jss4374" onClick={() => handleAppointments()}>Programari online</span>
                                </div>
                                <span class="MuiTouchRipple-root-4357"></span>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-4339 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss4371" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-4348 align-middle text-18 w-36 px-4" aria-hidden="true">description</span>
                                    <span class="align-middle sidenavHoverShow jss4374" onClick={() => handleMedici()}>Medici</span>
                                </div>
                                <span class="MuiTouchRipple-root-4357"></span>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-4339 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss4371 open" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-4348 align-middle text-18 w-36 px-4" aria-hidden="true">money</span>
                                    <span class="align-middle sidenavHoverShow jss4374">Simptome</span>
                                </div>
                                <span class="MuiTouchRipple-root-4357"></span>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-4339 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss4371 open" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-4348 align-middle text-18 w-36 px-4" aria-hidden="true">favorite</span>
                                    <span class="align-middle sidenavHoverShow jss4374">Clinica</span>
                                </div>
                                <span class="MuiTouchRipple-root-4357"></span>
                            </button>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-4339 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss4371" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-4348 align-middle text-18 w-36 px-4" aria-hidden="true">help</span>
                                    <span class="align-middle sidenavHoverShow jss4374">Despre noi</span>
                                </div>
                                <span class="MuiTouchRipple-root-4357"></span>
                            </button>
                        </div>
                        <div>
                            <a class="flex justify-between h-44 border-radius-4 mb-2 compactNavItem whitespace-pre overflow-hidden jss4342 bg-gray" aria-current="page">
                                <button class="MuiButtonBase-root-4339 w-full" tabindex="0" type="button" name="child"><span class="material-icons MuiIcon-root-4348 text-18 align-middle w-36 px-4" aria-hidden="true">receipt</span>
                                    <span class="align-middle text-left sidenavHoverShow jss4345" onClick={() => handleClick()}>FAQs</span>
                                    <div class="mx-auto"></div>
                                    <span class="MuiTouchRipple-root-4357"></span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="ps__rail-x" >
                        <div class="ps__thumb-x" tabindex="0" ></div>
                    </div>
                    <div class="ps__rail-y" >
                        <div class="ps__thumb-y" tabindex="0" ></div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NavBar