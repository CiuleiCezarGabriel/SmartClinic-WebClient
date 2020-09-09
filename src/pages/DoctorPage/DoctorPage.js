import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './DoctorPage.scss'
import QuestionService from '../../services/questionService'
import doctorIcon from '../../assets/images/doctor.jpg'
import { getDoctors } from '../../actions'
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

function DoctorPage() {

    const classes = useStyles();
    const doctor = useSelector(state => state.authentification.doctor)
    const user = useSelector(state => state.authentification.user)
    const [reviews, setReviews] = useState([])
    const [averageRating, setAverageRating] = useState()
    let numar = 1

    useEffect(() => {
        async function getAverageRating(doctorId) {
            setAverageRating(await QuestionService.getAverageRating(doctorId))
            numar = averageRating
        }

        async function getRatings(doctorId) {
            setReviews(await QuestionService.getReviewsOfDoctor(doctorId))
        }

        getAverageRating(doctor._id)
        getRatings(doctor._id)
    }, [])

    return (
        <div className="m-sm-30">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 containerFlex">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-3">
                    <div className="MuiPaper-root MuiCard-root pb-8 MuiPaper-elevation1 MuiPaper-rounded">
                        <div className="p-8 flex-column items-center">
                            <div >
                                <img src={doctorIcon} style={{ height: '70px', width: '70px', marginBottom: '20px' }}></img>
                            </div>
                            <p className="mt-0 mb-2 text-muted font-normal capitalize" >Hello {user.lastName} {user.firstName} </p>
                            <h5 className="m-0">Rating: {Math.round((averageRating + Number.EPSILON))}/5 </h5>
                            <h5 className="m-0">Reviews: {reviews.length} </h5>

                        </div>
                    </div>
                </div>
                <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-9'>
                    <div className="MuiPaper-root MuiCard-root mb-4 pb-4 MuiPaper-elevation1 MuiPaper-rounded">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>See reviews </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {reviews.map((review, i) => {
                                        return <div key={i}>
                                            {review.description}
                                            <hr className="MuiDivider-root mb-4" style={{width:'815px'}}></hr>
                                        </div>
                                    })}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <div className="flex flex-wrap justify-between items-center px-5 m--2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorPage