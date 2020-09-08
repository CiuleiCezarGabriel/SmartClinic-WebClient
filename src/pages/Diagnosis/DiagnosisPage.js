import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DrugPage from '../../components/Drugs/DrugPage'
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './diagnosis.scss'


function DiagnosisPage() {
    const diagnosis_obj = useSelector(state => state.diagnosis.data);
    const user = useSelector(state => state.authentification.user)

    const [diagnosisName, setDiagnosisName] = useState(diagnosis_obj.name);
    const [diagnosisDescription, setDiagnosisDescription] = useState(diagnosis_obj.description);

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
                                    <TextField size = "medium" value={diagnosisName}
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
                           
                        </List>
                    </div>
                        <DrugPage/>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        Diagnosis Page Patient
                    </div>
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