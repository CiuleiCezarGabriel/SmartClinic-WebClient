import React from 'react'
import Doctor from '../components/doctor/Doctor'
import { getDoctors } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import './DoctorList.scss'

function DoctorList() {

    const dispatch = useDispatch()
    const doctors = useSelector(state => state.getDoctors.data)

    useEffect(() => {
        dispatch(getDoctors())
        console.log(doctors)
    }, [])

    return (
        <div>
            <div>
                    {
                        doctors.map((doctor, i) => {
                            return <div key={i} > <Doctor firstName={doctor.userDetails[0].firstName}
                                lastName={doctor.userDetails[0].lastName}
                                speciality={doctor.speciality}
                                doctorId={doctor._id}
                                rating={doctor.rating}
                            >
                            </Doctor>
                            </div>
                        })
                    }
            </div>
        </div>
    )
}


export default DoctorList