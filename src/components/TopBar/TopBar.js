import React from 'react'
import { logout } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import Face from '../../assets/images/face.jpg'
import './topbar.scss';
import { history } from '../../utils'


function TopBar() {

    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(logout())
    }

    function handleProfile() {
        const userLog = localStorage.getItem('user');
        const user = JSON.parse(userLog);

        if (user.user.role == "PATIENT") {
            history.push('/patient');
        } else
            if (user.user.role == "DOCTOR") {
                history.push('/doctor');
            } else
                history.push('/');
    }

    return (
        <div>
            <div class="jss390">
                <div class="topbar-hold fixed">
                    <div class="flex justify-between items-center h-full">
                    
                        <div class="flex items-center">
                            <div class="inline-block">
                                <div class="MuiAvatar-root-596 MuiAvatar-circle-598 cursor-pointer mx-2">
                                    <span class="Logo" aria-hidden="true" onClick={() => handleProfile()}>
                                        <img src={Face} class="MuiAvatar-img-601" />
                                    </span>
                                </div>
                            </div>
                            <div class="Log-out">
                                <div class="MuiButtonBase-root-400 MuiListItem-root-860 MuiMenuItem-root-857 jss391 MuiMenuItem-gutters-858 MuiListItem-gutters-865 MuiListItem-button-866" tabindex="-1" role="menuitem" aria-disabled="false">
                                    <span class="material-icons MuiIcon-root-401" aria-hidden="true" onClick={() => handleLogout()}> power_settings_new </span>
                                    <span class="pl-4" hidden> Logout </span><span class="MuiTouchRipple-root-410"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar