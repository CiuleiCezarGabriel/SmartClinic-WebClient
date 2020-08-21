import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { fetchAppointments } from '../actions';
import { appointments } from '../reducers/appointmentReducer';
import Appointment from '../components/Appointment'


class AppointmentPage extends React.Component {

    constructor(props) {
        super(props)

        let { fetchAppointments } = this.props
        fetchAppointments()
        if (appointments.length < 10) {
            console.log(appointments)
        }
    }

    render() {
        let { appointments } = this.props
        return (
            <div>
                Appointments list:
                <div>
                {
                        appointments.map((appointment, i) => {
                            return <div key={i}> <Appointment 
                                                id={appointment._id}
                                                date = {appointment.date}
                                                doctor = {appointment.doctor}
                                                patient = {appointment.patient}>
                                                 </Appointment>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    appointments: state.appointments.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAppointments: fetchAppointments,
}, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(AppointmentPage)

