import React from 'react'
import { logout } from '../../actions'
import { useDispatch } from 'react-redux'
import { history } from '../../utils'
import './topbar.scss';


function TopBar() {

    


    return (
        <div>
            
                <div class="topbar withRouter(Connect(Layout1Topbar))-topbar-16082">
                    <div class="topbar-hold fixed">
                        <div class="flex justify-between items-center h-full">
                            <div class="flex">  </div>
                            <div class="flex items-center">
                                    <button class="MuiButtonBase-root-16092 MuiIconButton-root-16084" tabindex="0" type="button">
                                        <span class="MuiIconButton-label-16091">
                                            <span class="material-icons MuiIcon-root-16093" aria-hidden="true">search</span>
                                        </span>
                                        <span class="MuiTouchRipple-root-16102"></span>
                                    </button>
                                    <button class="MuiButtonBase-root-16233 MuiIconButton-root-16225" tabindex="0" type="button" >
                                        <span class="MuiIconButton-label-16232">
                                            <span class="MuiBadge-root-16234">
                                                <span class="material-icons MuiIcon-root-16249" aria-hidden="true">shopping_cart</span>
                                                <span class="MuiBadge-badge-16235 MuiBadge-anchorOriginTopRightRectangle-16240 MuiBadge-colorSecondary-16237">1</span>
                                            </span>
                                        </span>
                                        <span class="MuiTouchRipple-root-16258"></span>
                                    </button>
                                    <div class="inline-block" aria-haspopup="true">
                                        <img class="mx-2 align-middle circular-image-small cursor-pointer" src="/assets/images/face-6.jpg" ></img>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default TopBar