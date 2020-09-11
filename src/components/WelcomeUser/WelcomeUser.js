import React from 'react'
import './welcomeuser.scss';

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function WelcomeUser() {

  const classes = useStyles();



    return (
        <div>
            <div class="MuiPaper-rootf MuiCard-rootf px-6f py-5f h-fullf MuiPaper-elevation6f MuiPaper-roundedf" style={{ marginBottom: "2.5rem" }}>
                <small class="text-mutedf" ><h3>Welcome Back!</h3></small>
                {/*SLIDER <SliderPatient />*/}

                <div class="jss887f">

                    <div class="MuiPaper-rootf MuiExpansionPanel-rootf MuiExpansionPanel-roundedf MuiPaper-elevation1f MuiPaper-roundedf">

                        <div class="MuiCollapse-containerf MuiCollapse-hiddenf">
                            <div class="MuiCollapse-wrapperf">
                                <div class="MuiCollapse-wrapperInnerf">
                                    <div aria-labelledby="panel2a-header" id="panel2a-content" role="region">
                                    <div className={classes.root}>
                                    <Accordion>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                      >
                                        <Typography className={classes.heading}>Vezi rezultatul programarii din data 09/15/2020</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <Typography>
                                          Sunteti sanatos tun!
                                        </Typography>
                                      </AccordionDetails>
                                    </Accordion>
                                   
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