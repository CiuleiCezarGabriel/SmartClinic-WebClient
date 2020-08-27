import React from 'react'
import Appointment from '../components/Appointment/Appointment'
import Table from '../components/Table/Table'

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
    fetchAppointmentsForPatient,
    fetchAppointmentsDoctorConfirmed,
    fetchAppointmentsDoctorUnconfirmed,
    addAppointment
} from '../actions';

function AppointmentPage() {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [time, setTime] = useState(0);

    const user = useSelector(state => state.authentification.user)
    const patient = useSelector(state => state.authentification.patient)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTimeChange = (timePicked) => {
        setTime(timePicked)
    }

    const handleDateChange = (datePicked) => {
        setStartDate(datePicked);
    }

    const isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let timePrecision = time / 3600;
        if (timePrecision % 1 == 0.5) timePrecision = ~~timePrecision + ":30:00";
        else timePrecision = ~~timePrecision + ":00:00";

        let date = document.getElementById("dateId").value
        let datePrecision = date + 'T' + timePrecision + 'Z'

        let description = document.getElementById("descriptionId").value
        const inputs = { date: datePrecision, description: description, patient: patient._id, doctor: '5' }

        // console.log(inputs)
        dispatch(addAppointment(inputs))
        window.location.reload(false);
        handleClose()
        window.location.reload(false);
    }

    const dispatch = useDispatch()
    if (user.role === "PATIENT") {
        const appointments = useSelector(state => state.appointments.patient_app)

        useEffect(() => {
            dispatch(fetchAppointmentsForPatient())
        }, [])


        return (
            <div>
                <Appointment events={appointments} />

                <Button variant="primary" onClick={handleShow}>
                    MODAL
                </Button>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
                        <Button variant="primary" onClick={handleSubmit}>Create</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    } else {
        const appointments = useSelector(state => state.appointments.doctor_confirmed_app)
        const appointments_un = useSelector(state => state.appointments.doctor_unconfirmed_app)

        useEffect(() => {
            dispatch(fetchAppointmentsDoctorConfirmed())
            dispatch(fetchAppointmentsDoctorUnconfirmed())
        }, [])

        return (
            <div>
                <div>
                    <Appointment events={appointments} />
                </div>
                    <div>
                        <Table events={appointments_un} />
                    </div>
            </div>
        )
    }
}


export default AppointmentPage;

