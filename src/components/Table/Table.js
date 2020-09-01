import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux'
import { confirmAppointment, addAppointment, updateAppointment, deleteAppointment } from '../../actions'
import './table.scss'

export default function MaterialTableDemo(props) {

    const dispatch = useDispatch()
    const [events, setEvents] = useState(props.events)

    const doctor = useSelector(state => state.authentification.doctor)

    const [state, setState] = React.useState({
        columns: [
            { title: 'Patient username', field: 'patient_name' },
            { title: 'Data', field: 'data', type: 'date'},
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
            return {
                patient_name: "patient username",
                data: event.date.substring(0, 10),
                time: parseInt(event.date.substring(11, 13) + '' + event.date.substring(14, 15)),
                description: event.description,
                id: event._id
            }
        })
    });

    useEffect(() => {
        setState({
            columns: [
                { title: 'Patient username', field: 'patient_name' },
                { title: 'Date', field: 'date', type: 'date'},
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
                return {
                    patient_name: "patient username",
                    date: event.date.substring(0, 10),
                    time: parseInt(event.date.substring(11, 13) + '' + event.date.substring(14, 15)),
                    description: event.description,
                    id: event._id
                }
            })
        })
    }, [events])

    function onHandleConfirm( id) {
        dispatch(confirmAppointment(id));
        // let aux = events;
        // aux = aux.filter((a) => {return a.id == id})
        // setEvents(aux);

        window.location.reload(false)
    }

    function onHandleAdd(appointment) {
        dispatch(addAppointment(appointment));

        let aux = events;
        aux = aux.filter((a) => {return a.id == id})
        setEvents(aux);

        window.location.reload(false)
    }

    function onHandleUpdate(appointment) {
        dispatch(updateAppointment(appointment));
    }

    function onHandleDelete(id) {
        dispatch(deleteAppointment(id));
    }

    return (
        <div class="table-class">
            <MaterialTable
                title="Uncofirmed Appointments"
                columns={state.columns}
                data={state.data}
                actions={
                    [{
                        icon: 'save',
                        tooltip: 'Confirm Appointment',
                        onClick: (event, oldData) => { onHandleConfirm( oldData.id) }
                    }]
                }
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();

                                const year = newData.date.getFullYear();
                                let month = newData.date.getMonth() + 1;
                                const part_month = month/10;
                                if (~~part_month == 0) month = '0' + month;
                                let day = newData.date.getDate();
                                const part_day = day/10;
                                if (~~part_day == 0) day = '0' + day;
                                const time = newData.time;
                                const t=time/10
                                const time1 = ~~t + ":" + time%10 + "0" + ':00';

                                const fullDate = year + '-' + month + '-' + day + 'T' + time1 + 'Z';
                                console.log(fullDate);

                                //from postData
                                const postData={
                                    patient:"aaa",
                                    doctor:doctor._id,
                                    date:fullDate,
                                    description: newData.description
                                }
                                onHandleAdd(postData);
                                window.location.reload(false)
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();


                                const year = newData.date.getFullYear();
                                let month = newData.date.getMonth() + 1;
                                const part_month = month/10;
                                if (~~part_month == 0) month = '0' + month;
                                let day = newData.date.getDate();
                                const part_day = day/10;
                                if (~~part_day == 0) day = '0' + day;
                                const time = newData.time;
                                const t=time/10
                                const time1 = ~~t + ":" + time%10 + "0" + ':00';

                                const fullDate = year + '-' + month + '-' + day + 'T' + time1 + 'Z';

                                //from postData
                                const updateData={
                                    id:newData.id,
                                    patient:"aaa",
                                    doctor:doctor._id,
                                    date:fullDate,
                                    description: newData.description
                                }
                                console.log(updateData);

                                onHandleUpdate(updateData);
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
                                onHandleDelete(oldData.id);
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
