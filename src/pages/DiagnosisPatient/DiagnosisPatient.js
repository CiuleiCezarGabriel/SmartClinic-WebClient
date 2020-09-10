import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {findPrescriptionByDiagnosis} from '../../actions'
import './diagnosisPatient.scss';


function DiagnosisPatient() {
    const dispatch = useDispatch();

    const diagnosis_obj = useSelector(state => state.diagnosis.data);
    console.log(diagnosis_obj);

    useEffect(() => {
        dispatch(findPrescriptionByDiagnosis(diagnosis_obj._id))
    }, [])

    useEffect(() => {
    }, [prescriptions])

    const prescriptions = useSelector(state => state.diagnosis.prescriptions);

    const listPrescription = prescriptions.map(pres =>{
       return drugPrescription_template(pres);
    })

    function drugPrescription_template(drugPrescription){
        return(
            <div class="py-4nou px-4nou">
            <div class="MuiGrid-rootnou MuiGrid-containernou MuiGrid-align-items-xs-centernou">
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou">
                    <div class="flexnou items-centernou">
                        <button class="MuiButtonBase-rootnou MuiIconButton-rootnou MuiIconButton-sizeSmallnou" tabindex="0" type="button">
                            <span class="MuiTouchRipple-rootnou">
                            </span>
                        </button>
                        <div class="px-4nou">
                            <img class="border-radius-4 w-fullnou" src="/src/assets/images/bbb.jpg" alt="Bass Speaker" />
                        </div>
                    </div>
                </div>

                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou">
                <h6 class="m-0nou">{drugPrescription.name}</h6>
                    <p class="mt-2nou m-0nou text-mutednou">{drugPrescription.name}</p>
                </div>

                <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                    <div class="MuiFormControl-rootnou MuiTextField-rootnou">
                        <div class="MuiInputBase-rootnou MuiOutlinedInput-rootnou MuiInputBase-formControlnou MuiInputBase-marginDensenou MuiOutlinedInput-marginDensenou">
                            <input aria-invalid="false" name="amount" type="number" class="MuiInputBase-inputnou MuiOutlinedInput-inputnou MuiInputBase-inputMarginDensenou MuiOutlinedInput-inputMarginDensenou" value="1" style={{ width: "60px" }} />
                            <fieldset aria-hidden="true" class="jss3744nou MuiOutlinedInput-notchedOutlinenou" style={{ paddingLeft: "8px" }}>
                                <legend class="jss3745" style={{ width: "0.01px" }}><span>
                                </span>
                                </legend>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                    <h6 class="m-0nou">{drugPrescription.instructions}</h6>
                </div>

            </div>

        </div>
        )
    }

    return (
        <div class="MuiPaper-rootnou MuiCard-rootnou m-sm-30nou jss2018nou MuiPaper-elevation3nou MuiPaper-roundednou">
            <div class="py-4nou px-4nou">
                <div class="MuiGrid-rootnou MuiGrid-containernou">
                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou"></div>
                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou">
                        <h6 class="m-0nou">Name</h6>
                    </div>
                   
                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">Quantity</h6>
                    </div>
                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">Instructions</h6>
                    </div>
                </div>

            </div>
            <hr class="MuiDivider-rootnou"></hr>

            {listPrescription}

            <hr class="MuiDivider-rootnou mb-12nou" />
            <div class="MuiGrid-rootnou mb-12nou px-4nou MuiGrid-containernou">
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou"></div>
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou"></div>
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou"></div>
            </div>
            
            <form style={{ marginLeft: "0%"}} action="">
                <label> Diagnosis name:</label>
                <input style={{width: "50%", marginLeft: "10%"}} type="text1" id="fname" name="DiagnosisName" placeholder="Diagnosis Name" value = {diagnosis_obj.name}/>
                <br></br>
                <label> Diagnosis description:</label>
                <input style={{width: "50%", marginLeft: "5%"}} type="text1" id="fname" name="DiagnosisDescription" placeholder="Diagnosis Description" value = {diagnosis_obj.description} />
            </form>
            
        </div>
    )
}

export default DiagnosisPatient;