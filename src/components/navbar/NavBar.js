import React from 'react'
import { logout } from '../../actions'
import { useDispatch } from 'react-redux'
import './navbar.scss';
import { history } from '../../utils'

function NavBar() {

    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout)
    }

    function handleClick() {
        history.push('/questions')
    }


    return (
        <div class="jss1279 jss1282">
            <div class="flex-column relative h-full">
                <div class="scrollbar-container relative px-4 jss1285 ps ps--active-y">
                    <div class="navigation">
                        <div>
                        </div>
                        <div>
                            <button class="MuiButtonBase-root-353 w-full" tabindex="0" type="button" name="child"><div class="nav-bullet p-2px rounded ml-5 mr-2 jss361"></div>
                                <div class="nav-bullet-text ml-5 text-11 hidden"></div>
                                <span class="align-middle text-left sidenavHoverShow jss359" onClick={() => handleClick()}> FAQ 1 </span>
                                <div class="mx-auto"></div><span class="MuiTouchRipple-root-371"></span>
                            </button>
                            <button type="button" onClick={() => handleClick()} > Questions </button>
                        </div>
                        <div>
                            <div class="MuiButtonBase-root-400 MuiListItem-root-860 MuiMenuItem-root-857 jss391 MuiMenuItem-gutters-858 MuiListItem-gutters-865 MuiListItem-button-866" tabindex="-1" role="menuitem" aria-disabled="false">
                                <span class="material-icons MuiIcon-root-401" aria-hidden="true"> power_settings_new </span>
                                <span class="pl-4" onClick={() => handleLogout()}> Logout </span><span class="MuiTouchRipple-root-410"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div >
    )
}

export default NavBar