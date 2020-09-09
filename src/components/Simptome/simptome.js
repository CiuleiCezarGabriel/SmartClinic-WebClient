import React from 'react'
import { logout } from '../../actions'
import { useDispatch } from 'react-redux'
import './simptome.scss';


function Simptome() {


    return (
        <div>
            <div class="text-mutedf"><h3>Servicii</h3></div>
            <div class="MuiGrid-rootf mb-3f MuiGrid-containerf MuiGrid-spacing-xs-3f">

                <div class="MuiGrid-rootf MuiGrid-itemf MuiGrid-grid-xs-12f MuiGrid-grid-md-6f">
                    <div class="MuiPaper-rootf MuiCard-rootf flexf flex-wrapf justify-betweenf items-centerf p-sm-24f bg-paperf MuiPaper-elevation6f MuiPaper-roundedf">
                        <div class="flexf items-centerf">
                            <span class="material-iconsf MuiIcon-rootf jss841f" aria-hidden="true">favorite</span>
                            <div class="ml-3f">
                                <small class="text-mutedf"><h3>DERMATOLOGIE</h3></small>
                                <button class="btn"><a class="btn-primary btn" href="/Dermatologie"> Vezi mai mult</a></button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="MuiGrid-rootf MuiGrid-itemf MuiGrid-grid-xs-12f MuiGrid-grid-md-6f">
                    <div class="MuiPaper-rootf MuiCard-rootf flexf flex-wrapf justify-betweenf items-centerf p-sm-24f bg-paperf MuiPaper-elevation6f MuiPaper-roundedf">
                        <div class="flexf items-centerf">
                            <span class="material-iconsf MuiIcon-rootf jss841f" aria-hidden="true">favorite</span>
                            <div class="ml-3f">
                                <small class="text-mutedf"><h3>CARDIOLOGIE</h3></small>
                                <button class="btn"><a class="btn-primary btn" href="/Cardiologie"> Vezi mai mult</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="MuiGrid-rootf MuiGrid-itemf MuiGrid-grid-xs-12f MuiGrid-grid-md-6f">
                    <div class="MuiPaper-rootf MuiCard-rootf flexf flex-wrapf justify-betweenf items-centerf p-sm-24f bg-paperf MuiPaper-elevation6f MuiPaper-roundedf">
                        <div class="flexf items-centerf">
                            <span class="material-iconsf MuiIcon-rootf jss841f" aria-hidden="true">favorite</span>
                            <div class="ml-3f">
                                <small class="text-mutedf"><h3>NUTRITIE</h3></small>
                                <button class="btn"><a class="btn-primary btn" href="/Nutritie"> Vezi mai mult</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="MuiGrid-rootf MuiGrid-itemf MuiGrid-grid-xs-12f MuiGrid-grid-md-6f">
                    <div class="MuiPaper-rootf MuiCard-rootf flexf flex-wrapf justify-betweenf items-centerf p-sm-24f bg-paperf MuiPaper-elevation6f MuiPaper-roundedf">
                        <div class="flexf items-centerf">
                            <span class="material-iconsf MuiIcon-rootf jss841f" aria-hidden="true">favorite</span>
                            <div class="ml-3f">
                                <small class="text-mutedf"><h3>UROLOGIE</h3></small>
                                <button class="btn"><a class="btn-primary btn" href="/Urologie"> Vezi mai mult</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="MuiGrid-rootf MuiGrid-itemf MuiGrid-grid-xs-12f MuiGrid-grid-md-6f">
                    <div class="MuiPaper-rootf MuiCard-rootf flexf flex-wrapf justify-betweenf items-centerf p-sm-24f bg-paperf MuiPaper-elevation6f MuiPaper-roundedf">
                        <div class="flexf items-centerf">
                            <span class="material-iconsf MuiIcon-rootf jss841f" aria-hidden="true">favorite</span>
                            <div class="ml-3f">
                                <small class="text-mutedf"><h3>NEUROLOGIE</h3></small>
                                <button class="btn"><a class="btn-primary btn" href="/Neurologie"> Vezi mai mult</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="MuiGrid-rootf MuiGrid-itemf MuiGrid-grid-xs-12f MuiGrid-grid-md-6f">
                    <div class="MuiPaper-rootf MuiCard-rootf flexf flex-wrapf justify-betweenf items-centerf p-sm-24f bg-paperf MuiPaper-elevation6f MuiPaper-roundedf">
                        <div class="flexf items-centerf">
                            <span class="material-iconsf MuiIcon-rootf jss841f" aria-hidden="true">favorite</span>
                            <div class="ml-3f">
                                <small class="text-mutedf"><h3>PEDRIATIE</h3></small>
                                <button class="btn"><a class="btn-primary btn" href="/Pedriatie"> Vezi mai mult</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-mutedf"><h3>Farmacii</h3></div>
        </div>
    )
}

export default Simptome;