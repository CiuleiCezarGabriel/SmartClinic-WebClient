import React from 'react'

class Appointment extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            // DEMO 
            <div>
                <div>
                    <b>Appointment:</b>  <label> {this.props.id} </label>
                </div>
                <div>
                    Date:  <label> {this.props.date} </label>
                </div>
                <div>
                    Description:  <label> {this.props.description} </label>
                </div>
                <div>
                    Doctor - Patient:  <label> {this.props.doctor} - {this.props.patient} </label>
                </div>
            </div>
        )
    }
}
export default Appointment
