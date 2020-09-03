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
} from '../actions';

function AppointmentPage() {

    const user = useSelector(state => state.authentification.user)
    const patient = useSelector(state => state.authentification.patient)

    const dispatch = useDispatch()
    if (user.role === "PATIENT") {
        const appointments = useSelector(state => state.appointments.patient_app)

        useEffect(() => {
            dispatch(fetchAppointmentsForPatient())
        }, [])

        return (
            <div>
                <Appointment events={appointments} />
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

