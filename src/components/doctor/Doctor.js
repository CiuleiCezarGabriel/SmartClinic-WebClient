import React from 'react'
import './doctor.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import questionService from '../../services/questionService';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from 'react-datepicker'
import { addAppointment } from '../../actions';

function Doctor(props) {


    console.log(props)

    const [rating, setRating] = useState(props.rating)
    const [newRating, setNewRating] = useState(0)
    const [numberOfRatings, setNumberOfRatings] = useState(props.numberOfRatings)

    const [startDate, setStartDate] = useState(null);
    const [time, setTime] = useState(0);
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [showApp, setShowApp] = useState(false);
    const [review, setReview] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const patient = useSelector(state => state.authentification.patient)

    const handleCloseApp = () => setShowApp(false);
    const handleShowApp = () => setShowApp(true);

    const isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const user = useSelector(state => state.authentification.user)

    const handleAppointment = (e) => {
        e.preventDefault();
        let timePrecision = time / 3600;
        if (timePrecision % 1 == 0.5) timePrecision = ~~timePrecision + ":30:00";
        else timePrecision = ~~timePrecision + ":00:00";

        let date = document.getElementById("dateId").value
        let datePrecision = date + 'T' + timePrecision + 'Z'

        let description = document.getElementById("descriptionId").value
        const inputs = { date: datePrecision, description: description, patient: patient._id, doctor: props.doctorId }

        dispatch(addAppointment(inputs))
        handleCloseApp()
    }

    function handleSubmit() {

        const param = {
            userId: user._id,
            doctorId: props.doctorId,
            description: review,
            rating: newRating
        }

        console.log(param)
        questionService.addRating(param)
        setNumberOfRatings(numberOfRatings + 1)
        console.log(numberOfRatings)
        let aux = (rating * (numberOfRatings - 1) + newRating) / numberOfRatings
        setRating(Math.round((aux + Number.EPSILON) * 100) / 100)

        handleClose()
    }

    function handleReviewChange(e) {
        const { value } = e.target;
        setReview(value)
    }

    function ratingChanged(newRating) {
        setNewRating(newRating)
    };


    const handleTimeChange = (timePicked) => {
        setTime(timePicked)
    }

    const handleDateChange = (datePicked) => {
        setStartDate(datePicked);
    }

    useEffect(() => {
    }, [rating, numberOfRatings])

    return (
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 item">
            <div className="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
                <div class="p-5 flex flex-wrap justify-between items-center m--2">
                    <div class="flex items-center m-2">
                        <div class="ml-4">
                            <h5 class="m-0">{props.firstName + ' ' + props.lastName}</h5>
                            <p class="mb-0 mt-2 text-muted font-normal capitalize">{props.speciality}</p>
                        </div>
                    </div>
                    <div class="flex items-center m-2">
                        <div>
                            <h4> {rating}/5 </h4>
                            <p class="mb-0 mt-2 text-muted font-normal capitalize">{numberOfRatings} reviews</p>
                        </div>
                    </div>
                </div>
                <hr class="MuiDivider-root"></hr>
                <div>
                    <div class="flex m-2">
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text bg-light-primary hover-bg-primary text-primary px-5 mr-1 MuiButton-textSizeSmall MuiButton-sizeSmall" type="button">
                            <span class="MuiButton-label" onClick={handleShowApp}>APPOINTMENT</span>
                            <Modal show={showApp} onHide={handleCloseApp} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create Appointment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="show-grid">
                                    <Container>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Date</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <DatePicker
                                                    id="dateId"
                                                    selected={startDate}
                                                    onChange={handleDateChange}
                                                    filterDate={isWeekday}
                                                    dateFormat="yyyy-MM-dd"
                                                    placeholderText="Select a weekday"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Time</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <TimePicker
                                                    start="08:00" end="18:00" step={30}
                                                    onChange={handleTimeChange}
                                                    value={time} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Description</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <input id="descriptionId"></input>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleAppointment}>Create</Button>
                                </Modal.Footer>
                            </Modal>
                            <span class="MuiTouchRipple-root"></span>
                        </button>
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text bg-light-primary hover-bg-primary text-primary px-5 MuiButton-textSizeSmall MuiButton-sizeSmall" type="button">
                            <span class="MuiButton-label" onClick={handleShow}>REVIEW</span>

                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create Review</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="show-grid">
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={8}>
                                                <div>
                                                    <h5> Rating: </h5>
                                                </div>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={30}
                                                    isHalf={true}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </Col>
                                            <Col xs={6} md={4}>

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={10} md={4}>
                                                <h5 style={{ marginTop: "25px" }}>Description:</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <textarea style={{ width: "400px" }} rows="5" placeholder="" onChange={handleReviewChange} value={review} name="review"></textarea>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleSubmit}>Add Review</Button>
                                </Modal.Footer>
                            </Modal>
                            <span class="MuiTouchRipple-root">
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor
