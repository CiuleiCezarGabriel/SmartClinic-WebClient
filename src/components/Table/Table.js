import React from 'react';
import MaterialTable from 'material-table';
import { useDispatch } from 'react-redux'
import { confirmAppointment } from '../../actions'
import './table.scss'

export default function MaterialTableDemo(props) {

    const dispatch = useDispatch()
    const events = props.events;

    const [state, setState] = React.useState({
        columns: [
            { title: 'Patient', field: 'patient' },
            { title: 'Data', field: 'data', type: 'date' },
            {
                title: 'Time',
                field: 'time',
                type: 'number',
                lookup: {
                    80: '08:00', 83: '08:30', 90: '09:00', 93: "09:30", 100: "10:00", 103: "10:30", 110: "11:00",
                    113: "11:30", 120: "12:00", 123: "12:30", 130: "13:00", 133: '13:30', 140: '14:00', 143: '14:30', 150: '15:00',
                    153: '15:30', 160: '16:00', 163: '16:30', 170: '17:00', 173: '17:30', 180: '18:00', 183: '18:30'
                }
            },
            { title: 'Description', field: 'description' },
        ],
        data: events.map(event => {
            console.log(event.date.substring(11, 13) + '' + event.date.substring(14, 15))
            return {
                patient: "aa",
                data: event.date.substring(0, 10),
                time: parseInt(event.date.substring(11, 13) + '' + event.date.substring(14, 15)),
                description: event.description,
                id: event._id
            }
        })
    });

    function onHandleConfirm(id) {
        dispatch(confirmAppointment(id));
        window.location.reload(false);
    }

    return (
        <div class = "table-class">
            <MaterialTable
                title="Uncofirmed Appointments"
                columns={state.columns}
                data={state.data}
                actions={
                    [{
                        icon: 'save',
                        tooltip: 'Confirm Appointment',
                        onClick: (event, rowData) => {
                            onHandleConfirm(rowData.id);
                        }
                    }]
                }
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </div>
    );
}
