import React, { Fragment } from 'react'
import './farmacii.scss';


function Farmacii() {


    return (


        <div>
            <div class="MuiGrid-rootfarma MuiGrid-itemfarma MuiGrid-grid-xs-12farma MuiGrid-grid-sm-12farma MuiGrid-grid-md-3farma">
                <div class="MuiPaper-rootfarma MuiCard-rootfarma pb-8farma MuiPaper-elevation1farma MuiPaper-roundedfarma">

                    <div class="p-8farma flex-columnfarma items-centerfarma">
                        <div class="MuiAvatar-rootf MuiAvatar-circlef h-56f w-56f mb-6f">
                            <img class="MuiAvatar-imgf"></img>
                        </div>
                        <p class="mt-0f mb-2f text-mutedf font-normalf capitalizef">Farmacia Catena</p>
                        <h6 class="m-0f">Cluj-Napoca</h6>
                        <hr class="MuiDivider-rootf mb-8f" />
                        <div class="mb-8f">
                            <p class="text-mutedf mt-0f mb-3f ml-3f">Pharmacy shop</p>
                            <button class="MuiButtonBase-rootf MuiButton-rootf MuiButton-textf w-fullf justify-startf px-3f" tabindex="0" type="button">
                                <span class="MuiButton-labelf">
                                    <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">shopping_basket</span>
                                    <span class="ml-2f">Cumpara</span>
                                </span>
                                <span class="MuiTouchRipple-rootf"></span>
                            </button>
                            <button class="MuiButtonBase-rootf MuiButton-roof MuiButton-textf w-fullf justify-startf px-3f" tabindex="0" type="button">
                                <span class="MuiButton-labelf">
                                    <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">shopping_basket</span>
                                    <span class="ml-2f">Beta</span>
                                </span>
                                <span class="MuiTouchRipple-rootf"></span>
                            </button>
                            <button class="MuiButtonBase-rootf MuiButton-roof MuiButton-textf w-fullf justify-startf px-3f" tabindex="0" type="button">
                                <span class="MuiButton-labelf">
                                    <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">shopping_basket</span>
                                    <span class="ml-2f">Sales</span>
                                </span>
                                <span class="MuiTouchRipple-rootf"></span>
                            </button>
                            <button class="MuiButtonBase-rootf MuiButton-roof MuiButton-textf w-fullf justify-startf px-3f" tabindex="0" type="button">
                                <span class="MuiButton-labelf">
                                    <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">shopping_basket</span>
                                    <span class="ml-2f">Report</span>
                                </span>
                                <span class="MuiTouchRipple-rootf">
                                </span>
                            </button>
                        </div>



                    </div>


                </div>
            </div>

        </div>
    )
}

export default Farmacii