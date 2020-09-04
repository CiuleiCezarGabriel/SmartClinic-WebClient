import React from 'react'
import { useSelector } from 'react-redux'

function DiagnosisPage() {

    const diagnosis_obj = useSelector(state => state.diagnosis.data);
    console.log(diagnosis_obj);
    const user = useSelector(state => state.authentification.user)

    if (diagnosis_obj.length != 0) {
        if (user.role == 'DOCTOR') {
            return (
                <div>
                    <div>
                        Diagnosis Page Doctor
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        Diagnosis Page Patient
                    </div>
                </div>
            )
        }

    } else {
        return (
            <div>
                <div>
                    Diagnosis not created
                </div>
            </div>
        )
    }

}

export default DiagnosisPage