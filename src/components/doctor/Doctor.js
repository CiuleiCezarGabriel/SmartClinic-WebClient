import React from 'react'
import './doctor.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import questionService from '../../services/questionService';

function Doctor(props) {

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [review, setReview] = useState(null)
    const [rating, setRating] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector(state => state.authentification.user)

    function handleReview() {
        const param = {
            userId: user._id,
            doctorId: props.doctorId,
            description: review,
            rating: rating
        }

        questionService.addRating(param)
    }

    function handleAppointment() {

    }

    function handleSubmit() {

        const param = {
            userId: user._id,
            doctorId: props.doctorId,
            description: review,
            rating: rating
        }
        questionService.addRating(param)
        handleClose()
    }

    function handleReviewChange(e) {
        const { value } = e.target;
        setReview(value)
    }

    function ratingChanged(newRating) {
        setRating(newRating)
    };


    useEffect(() => {

    }, [])

    return (
        <div style={{ marginBottom: "20px" }}>
            <div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
                <div class="p-5 flex flex-wrap justify-between items-center m--2">
                    <div class="flex items-center m-2">
                        <div class="ml-4">
                            <h5 class="m-0">{props.firstName + ' ' + props.lastName}</h5>
                            <p class="mb-0 mt-2 text-muted font-normal capitalize">{props.speciality}</p>
                        </div>
                    </div>
                    <div class="flex items-center m-2">

                        <div>
                            <h4> {props.rating}/5 </h4>
                        </div>
                    </div>
                </div>
                <hr class="MuiDivider-root"></hr>
                <div>
                    <div class="flex m-2">
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text bg-light-primary hover-bg-primary text-primary px-5 mr-1 MuiButton-textSizeSmall MuiButton-sizeSmall" type="button">
                            <span class="MuiButton-label" onClick={handleAppointment}>APPOINTMENT</span>
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
