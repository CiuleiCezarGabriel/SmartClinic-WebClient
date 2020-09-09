import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { history } from '../../utils'
import { findDiagnosis, addDiagnosis } from '../../actions'
import './appointment.scss'


const localizer = momentLocalizer(moment) // or globalizeLocalizer

const useStyles = makeStyles((theme) => ({
    appBar: { position: 'relative' },
    title: { marginLeft: theme.spacing(2), flex: 1 },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Appointment(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [diagnosisName, setDiagnosisName] = useState('');
    const [diagnosisDescription, setDiagnosisDescription] = useState('');
    const [appSelected, setAppSelected] = useState();

    const dispatch = useDispatch()

    const user = useSelector(state => state.authentification.user)
    const diagnostic = useSelector(state => state.diagnosis.data);

    function handleDiagnostic(selectedAppointment) {
        dispatch(findDiagnosis(selectedAppointment.id)).then(res => {
            setAppSelected(selectedAppointment);
           
            if (!res) {
                if (user.role == 'DOCTOR') {
                    handleClickOpen()
                } else {
                    if (user.role == 'PATIENT') {
                        alert("Diagnosis is not written");
                    }
                }
            } else history.push('/diagnosis')

        });


    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveDiagnosis = () =>{
        
        const newDiagnosis = {
            name: diagnosisName,
            description: diagnosisDescription,
            appointment: appSelected.id,
        }
       
        dispatch(addDiagnosis(newDiagnosis));
        
        history.push('/diagnosis');
    }

    const events = props.events
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events.map(event => {
                    return {
                        title: event.description,
                        start: moment(event.date).toDate(),
                        end: moment(event.date).add(0.5, "hour").toDate(),
                        allDay: false,
                        id: event._id
                    }
                })}
                onSelectEvent={(selectedAppointment) => handleDiagnostic(selectedAppointment)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700 }}
            />

            <Dialog fullWidth open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Create Diagnosis
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSaveDiagnosis}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <div class="form-label">
                            <ListItemText primary="Diagnosis name:" />
                        </div>
                        <div class='form-text-name'>
                            <TextField  onChange = {(e) => setDiagnosisName(e.target.value)} />
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <div class='form-label' >
                            <ListItemText primary="Diagnosis description:" />
                        </div>
                        <div class='form-text-description'>
                            <TextField onChange = {(e) => setDiagnosisDescription(e.target.value)}  multiline
                                rows={1}
                                rowsMax={6} />
                        </div>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )

}
export default Appointment
