import React from 'react'
import { logout } from '../../actions'
import { useDispatch } from 'react-redux'
import './navbar.scss';

function NavBar() {

    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout)
    }

    return (
        <div class="jss1279 jss1282">
            <div class="flex-column relative h-full">
                <div class="scrollbar-container relative px-4 jss1285 ps ps--active-y">
                    <div class="navigation">
                    <a class="flex justify-between h-44 border-radius-4 mb-2 compactNavItem whitespace-pre overflow-hidden jss1287" href="/crud-table">
                    <button class="MuiButtonBase-root-1293 w-full" tabindex="0" type="button" name="child">
                        <span class="material-icons MuiIcon-root-1294 text-18 align-middle w-36 px-4" aria-hidden="true">format_list_bulleted</span>
                        <span class="align-middle text-left sidenavHoverShow jss1290">CRUD Table</span>
                        <div class="mx-auto"></div>
                        <span class="MuiTouchRipple-root-1775"></span>
                    </button></a>
                        <div>
                            <button class="MuiButtonBase-root-8895 flex justify-between h-44 border-radius-4 mb-2 w-full pr-4 has-submenu compactNavItem whitespace-pre overflow-hidden jss8909" tabindex="0" type="button">
                                <div class="flex items-center">
                                    <span class="material-icons MuiIcon-root-8896 align-middle text-18 w-36 px-4" aria-hidden="true">help</span>
                                    <span class="align-middle sidenavHoverShow jss8912">Help Center</span>
                                </div>
                                <div class="item-arrow sidenavHoverShow jss8911 jss8906">
                                    <span class="material-icons MuiIcon-root-8896 align-middle MuiIcon-fontSizeSmall-8903" aria-hidden="true">chevron_right</span>
                                </div>
                                <span class="MuiTouchRipple-root-9370"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar