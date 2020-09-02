import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './appointment.scss'
import { history } from '../../utils'


const localizer = momentLocalizer(moment) // or globalizeLocalizer

function Appointment(props) {
    
    function handleDiagnostic(e) {
        console.log(e);//informatiile despre appointment
        history.push('/diagnostic');
    }
   
    const events = props.events
    return (
        <div>
                <Calendar
                    localizer={localizer}
                    events={events.map(event=>{
                        return {
                            title:event.description,
                            start: moment(event.date).toDate(),
                            end: moment(event.date).add(0.5,"hour").toDate(),
                            allDay:false
                        }
                    })}
                    onSelectEvent = {(e) => handleDiagnostic(e)}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 700 }}
                />
        </div>
    )

}
export default Appointment
