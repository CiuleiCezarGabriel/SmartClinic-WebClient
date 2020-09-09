import React, { useEffect, useState } from 'react';
import './drugSearch.scss';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPharmacies } from '../../actions'
import { Input } from '@material-ui/core';

function DrugSearch() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPharmacies())
    }, [])

    let pharmacies = useSelector(state => state.pharmacies.data)
    const [listPharmacies, setListPharmacies] = useState([])
    const [searchString, setSearchString] = useState('');


    const pharmacy_template = (pharm) => {
        return (
            <div class="flex items-center justify-between">
                <label class="MuiFormControlLabel-root flex-grow">
                    <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                        <span class="MuiIconButton-label">
                            <input class="jss8329" name={pharm.name} type="checkbox" data-indeterminate="false" />
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                            </svg>
                        </span>
                        <span class="MuiTouchRipple-root"></span>
                    </span>
                    <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">{pharm.name}</span>
                </label>
                <small class="badge bg-light-primary text-primary">{pharm.drugs.length}</small>
            </div>)
    }

    useEffect(() => {
        pharmacies = searchString.length > 0 ? pharmacies.filter(pharm => {
            return pharm.name.toLowerCase().match(searchString);
        }) : pharmacies;

        setListPharmacies(pharmacies.map((pharm) => pharmacy_template(pharm)));
    }, [searchString]);

    useEffect(() => {
    }, [listPharmacies])

    return (
            
            <div class="px-4">
                <div class="MuiPaper-root MuiCard-root relative p-4 mb-4 MuiPaper-elevation3 MuiPaper-rounded">
                    <h5 class="m-0 mb-4">Pharmacies</h5>
                    <div class="MuiFormControl-root MuiTextField-root mb-4 MuiFormControl-fullWidth">
                        <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                            <div class="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-marginDense">
                                <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">search</span>
                            </div>
                            <Input aria-invalid="false" placeholder="Search Pharmacy here..." type="text" onChange={(e) => setSearchString(e.target.value)} value={searchString} class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" />
                            <fieldset aria-hidden="true" class="jss8322 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: "8px" }}>
                                <legend class="jss8323" style={{ width: "0.01px" }}>
                                    <span>​</span>
                                </legend>
                            </fieldset>
                        </div>
                    </div>

                    {listPharmacies}
                </div>
        </div>
    );
}

export default DrugSearch