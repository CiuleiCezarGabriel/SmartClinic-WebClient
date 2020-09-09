import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item/Item'
import DrugSearch from '../DrugSearch/DrugSearch'
import drugImg from '../../assets/images/bbb.jpg'
import TablePagination from '@material-ui/core/TablePagination';
import { fetchAllDrugs } from '../../actions'
import { Input } from '@material-ui/core';

import './drug.scss'

function DrugPage() {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchDrugString, setSearchDrugString] = useState('');
    const [listDrugs, setListDrugs] = useState([]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    useEffect(() => {
        dispatch(fetchAllDrugs())
    }, [])

    let allDrugs = useSelector(state => state.pharmacies.drugs);
    useEffect(() => {
        allDrugs = searchDrugString.length > 0 ? allDrugs.filter(drug => {
            return drug.name.toLowerCase().match(searchDrugString);
        }) : allDrugs;

        setListDrugs(allDrugs.map((drug) => drug_template(drug)));
    }, [searchDrugString]);

    useEffect(() => {
    }, [listDrugs])

    const drug_template = (drug) => {
        return (
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
                <div class="MuiPaper-root MuiCard-root text-center relative h-full jss1923 MuiPaper-elevation3 MuiPaper-rounded">
                    <Item price={drug.price} name={drug.name} img={drugImg}></Item>
                </div>
            </div>
        )
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
                        <DrugSearch />
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