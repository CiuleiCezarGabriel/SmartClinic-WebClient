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
    function handleCart() {
        history.push('/cart');
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
                        <button class="MuiButtonBase-root-8112 MuiIconButton-root-8104" tabindex="0" type="button">
                                <span class="MuiIconButton-label-8111">
                                    <span class="material-icons MuiIcon-root-401" aria-hidden="true" onClick={() => handleLogout()}> power_settings_new </span>
                                    <span class="pl-4" hidden> Logout </span>
                                </span>
                                <span class="MuiTouchRipple-root-8122">
                                </span>
                            </button>

                            <button class="MuiButtonBase-root-8231 MuiIconButton-root-8223" tabindex="0" type="button" style={{ color: "rgba(52, 49, 76, 0.54)" }}>
                                <span class="MuiIconButton-label-8230">
                                    <span class="MuiBadge-root-8232">
                                        <span class="material-icons MuiIcon-root-8247" aria-hidden="true" onClick={() => handleCart()}>shopping_cart</span>
                                    </span>
                                </span>
                                <span class="MuiTouchRipple-root-8256"></span>
                            </button>

                            <div class="inline-block">
                                <div class="MuiAvatar-root-8308 MuiAvatar-circle-8310 cursor-pointer mx-2">
                                    <span class="Logo" aria-hidden="true" onClick={() => handleProfile()}>
                                        <img src={Face} class="MuiAvatar-img-8313" />
                                    </span>
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