import React from 'react'
import './welcomeuser.scss';

function WelcomeUser() {
    return (
        <div>
        <div class="MuiPaper-rootf MuiCard-rootf px-6f py-5f h-fullf MuiPaper-elevation6f MuiPaper-roundedf"  style={{marginBottom:"2.5rem"}}>
        <small class="text-mutedf" ><h3>Welcome User!</h3></small>
                   {/*SLIDER <SliderPatient />*/}
                   
            <div class="jss887f">
                
                <div class="MuiPaper-rootf MuiExpansionPanel-rootf MuiExpansionPanel-roundedf MuiPaper-elevation1f MuiPaper-roundedf">
                    
                    <div class="MuiCollapse-containerf MuiCollapse-hiddenf">
                        <div class="MuiCollapse-wrapperf">
                            <div class="MuiCollapse-wrapperInnerf">
                                <div aria-labelledby="panel2a-header" id="panel2a-content" role="region">
                                    <div class="MuiExpansionPanelDetails-rootf">
                                        <p class="MuiTypography-rootf MuiTypography-body11f text-muted2f">Aici puteti verifica Istoricul dvs. medical: </p>
                                        <button class="btn"><a class="btn-primary btn" href="/Diagnosis"> Vezi mai mult</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>


</div> 

               
          
    )

}

export default WelcomeUser;