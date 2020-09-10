import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item/Item'
import drugImg from '../../assets/images/bbb.jpg'
import TablePagination from '@material-ui/core/TablePagination';
import { fetchAllDrugs,fetchPharmacies, fetchPharmacyDrugs } from '../../actions'
import { Input } from '@material-ui/core';

import './drug.scss'

function DrugPage() {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchDrugString, setSearchDrugString] = useState('');
    const [listDrugs, setListDrugs] = useState([]);   
    const [listPharmacies, setListPharmacies] = useState([])
    const [searchString, setSearchString] = useState('');
    const [pharmacyCheck, setPharmacyCheck] = useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    
    function handleChange(e,id) {
        if(document.querySelector('.jss8329:checked') !== null){
            setPharmacyCheck(true);
            dispatch(fetchPharmacyDrugs(id)).then(res => {
                setListDrugs(res.drugs.map((drug) => drug_template(drug)));
            });
        }else{
            setPharmacyCheck(false);
            setListDrugs(allDrugs.map((drug) => drug_template(drug)));
        }
    }

    useEffect(() => {
        dispatch(fetchPharmacies())
        dispatch(fetchAllDrugs())
    }, [])

    let allDrugs = useSelector(state => state.pharmacies.drugs);
    let pharmacies = useSelector(state => state.pharmacies.data);

    useEffect(() => {
        allDrugs = searchDrugString.length > 0 ? allDrugs.filter(drug => {
            return drug.name.toLowerCase().match(searchDrugString);
        }) : allDrugs;

        setListDrugs(allDrugs.map((drug) => drug_template(drug)));
    }, [searchDrugString]);

    useEffect(() => {
        pharmacies = searchString.length > 0 ? pharmacies.filter(pharm => {
            return pharm.name.toLowerCase().match(searchString);
        }) : pharmacies;

        setListPharmacies(pharmacies.map((pharm) => pharmacy_template(pharm)));
    }, [searchString]);

    useEffect(() => {
    }, [listPharmacies,listDrugs, pharmacyCheck])

    const drug_template = (drug) => {
        return (
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
                <div class="MuiPaper-root MuiCard-root text-center relative h-full jss1923 MuiPaper-elevation3 MuiPaper-roundedd">
                    <Item price={drug.price} name={drug.name} img={drugImg} drug_id={drug._id}></Item>
                </div>
            </div>
        )
    }
    const pharmacy_template = (pharm) => {
        return (
            <div class="flex items-center justify-between">
                <label class="MuiFormControlLabel-root flex-grow">
                    <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                        <span class="MuiIconButton-label">
                            <input class="jss8329" onChange={(e) => handleChange(e,pharm._id)} type="checkbox" name="" value="" data-indeterminate="false" /> 
                            <svg class="MuiSvgIcon-root" focusable="false" type="radio" name="reason" viewBox="0 0 24 24" aria-hidden="true">
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

    return (
        <div>
            <div class="relative flex h-full">
                <div class="flex h-full">
                    <div class="bg-default jss8319 jss8321">
                        <div class="pl-4 flex items-center mb-4 mt-2">
                            <div class="MuiFormControl-root MuiTextField-root bg-paper flex-grow mr-4 MuiFormControl-fullWidth">
                                <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                    <div class="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-marginDense">
                                        <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">search</span>
                                    </div>
                                    <Input aria-invalid="false" name="query" placeholder="Search drug here..." onChange={(e) => setSearchDrugString(e.target.value)} type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" />
                                    <fieldset aria-hidden="true" class="jss8322 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: "8px" }}>
                                        <legend class="jss8323" style={{ width: "0.01px" }}>
                                            <span>
                                            </span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        {/* <DrugSearch /> */}
                        <div class="px-4">
                            <div class="MuiPaper-root MuiCard-root relative p-4 mb-4 MuiPaper-elevation3 MuiPaper-roundedd">
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
                    </div>
                </div>
                <div class="relative flex-grow h-full">
                    <div class="relative h-full w-full">
                        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                            {listDrugs}
                        </div>
                    </div>
                </div>
            </div>
            <TablePagination
                component="div"
                count={allDrugs.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>

    )
}

export default DrugPage