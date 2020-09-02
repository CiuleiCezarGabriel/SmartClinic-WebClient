import React from 'react'
import Doctor from '../../components/doctor/Doctor'
import { getDoctors } from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import './DoctorList.scss'

function DoctorList() {

    const dispatch = useDispatch()
    const doctors = useSelector(state => state.getDoctors.data)

    useEffect(() => {
        dispatch(getDoctors())
    }, [])

    useEffect(() => {
        
    }, [doctors])

    return (
        <div>
            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 ">
                {
                    doctors.map((doctor, i) => {
                        return <Doctor key={i} firstName={doctor.userDetails[0].firstName}
                            lastName={doctor.userDetails[0].lastName}
                            speciality={doctor.speciality}
                            doctorId={doctor._id}
                            rating={doctor.rating}
                            numberOfRatings={doctor.number}
                        >
                        </Doctor>
                    })
                }
            </div>
        </div>
    )
}


export default DoctorList