import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DrugPage from '../../components/Drugs/DrugPage'
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import Button from '@material-ui/core/Button';
import DiagnosisPatient from '../DiagnosisPatient/DiagnosisPatient'
import { deleteDrugPrescription, findPrescriptionByDiagnosis } from '../../actions'
import './diagnosis.scss'


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


function DiagnosisPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const diagnosis_obj = useSelector(state => state.diagnosis.data);
    const user = useSelector(state => state.authentification.user)

    const [diagnosisName, setDiagnosisName] = useState(diagnosis_obj.name);
    const [diagnosisDescription, setDiagnosisDescription] = useState(diagnosis_obj.description);
    const [openRight, setOpenRight] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpenRight(open);
    };

    function handleDeleteDrugPrescription(e, obj) {
        dispatch(deleteDrugPrescription(obj, diagnosis_obj._id));
    }

    useEffect(() => {
        dispatch(findPrescriptionByDiagnosis(diagnosis_obj._id))
    }, [])

    useEffect(() => {
    }, [prescriptions])

    const prescriptions = useSelector(state => state.diagnosis.prescriptions);
    const list = () => (
        <div>
            <List>
                <ListItem button >
                    <ListItemText primary='Prescription' />
                </ListItem>
            </List>
            <Divider />
            <List>
                {prescriptions.map((pres) => (
                    <div>
                        <ListItem key={pres.name}>
                            <Button onClick={(e) => handleDeleteDrugPrescription(e, pres._id)}>
                                <DeleteForeverTwoToneIcon style={{ marginRight: "5%" }} />
                            </Button>
                            <ListItemText primary={"Name: " + pres.name} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={'Quantity: ' + pres.quantity} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={'Instrunctions: '+ pres.instructions} />
                        </ListItem>
                        <Divider />
                    </div>


                ))}
            </List>
        </div>
    );

    if (diagnosis_obj.length != 0) {
        if (user.role == 'DOCTOR') {
            return (
                <div>
                    <div>
                        <List >
                            <ListItem button>
                                <div class="label-dig">
                                    <ListItemText primary="Diagnosis name:" />
                                </div>
                                <div id='text-name-dig'>
                                    <TextField size="medium" value={diagnosisName}
                                        onChange={(e) => setDiagnosisName(e.target.value)} />
                                </div>
                                <div></div>
                                <div class='label-dig' >
                                    <ListItemText primary="Diagnosis description:" />
                                </div>
                                <div id='text-description-dig'>
                                    <TextField value={diagnosisDescription}
                                        onChange={(e) => setDiagnosisDescription(e.target.value)} multiline
                                        rows={1}
                                        rowsMax={6} />
                                </div>
                            </ListItem>
                            <Divider />
                            <div id='button-prescription'>
                                <React.Fragment key={'right'}>
                                    <Button onClick={toggleDrawer('right', true)}>See Prescription</Button>
                                    <SwipeableDrawer
                                        anchor={'right'}
                                        open={openRight}
                                        onClose={toggleDrawer(false)}
                                        onOpen={toggleDrawer(true)}
                                    >
                                        {list()}
                                    </SwipeableDrawer>
                                </React.Fragment>
                            </div>
                        </List>
                    </div>
                    <DrugPage elem = "Add to prescription"/>
                </div>
            )
        } else {
            return (
                <div>
                    <DiagnosisPatient/>
                </div>
            )
        }

    } else {
        return (
            <div>
                <div>
                    Diagnosis not created
                </div>
            </div>
        )
    }

}

export default DiagnosisPage