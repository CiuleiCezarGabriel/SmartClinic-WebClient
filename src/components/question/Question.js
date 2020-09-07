import React from 'react'
import { useEffect, useState } from 'react'
import { updateResponse, updateStatus } from '../../actions';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import './questions.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        marginBottom: '20px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: '30px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Question(props) {
    const classes = useStyles();
    const [response, setResponse] = useState(props.response)
    const [alert, setAlert] = useState(false)
    const [status, setStatus] = useState(props.status)
    const dispatch = useDispatch()

    const doctor = useSelector(state => state.authentification.doctor)

    function handleChange(e) {
        const { value } = e.target;
        setResponse(value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateResponse(props.questionId, doctor._id, response))
        setAlert(true)
    }

    function handleStatusSelect(e) {
        const { name, value } = e.target;
        setStatus(value)
        dispatch(updateStatus(props.questionId, value))
    }

    useEffect(() => {
        console.log(status)
    }, [status])

    useEffect(() => {
        console.log(alert)
    }, [alert])


    return (
        <div>
            {props.userRole == "ADMIN"
                &&
                <div>
                    <div>
                        Question <label> {props.question}  </label>
                    </div>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label"> Status </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={status}
                            onChange={handleStatusSelect}
                        >   
                            <MenuItem value={status}>
                                <em>
                                    {status}
                                </em>
                            </MenuItem>
                            <MenuItem value={'UNANSWERED'}>ACCEPT</MenuItem>
                            <MenuItem value={"DELETE"}>DELETE</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            }
            {props.userRole == "DOCTOR"
                &&
                <div>

                    {
                        props.response == " " ?
                            <div>
                                <div>
                                    Question <label> {props.question} </label>
                                </div>
                                <form id="form" onSubmit={handleSubmit}>
                                    <TextField id="outlined-search" value={response} onChange={handleChange} label="Response" type="search" variant="outlined" />
                                    <button className="btn btn-primary" style={{ marginLeft: '20px', marginTop: '4px' }}>
                                        Add Response
                                     </button>
                                </form>
                            </div>
                            :

                            <div className={classes.root}>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>{props.question} </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Response: {props.response}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                    }
                </div>
            }
            {props.userRole == "PATIENT"
                &&
                <div className={classes.root}>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{props.question} </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Response: {props.response}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            }

        </div >
    )
}

export default Question
