import React from 'react';
import './drugSearch.scss'

function DrugSearch() {
    return (
        <div class="bg-default jss8319 jss8321">
            <div class="pl-4 flex items-center mb-4 mt-2">
                <div class="MuiFormControl-root MuiTextField-root bg-paper flex-grow mr-4 MuiFormControl-fullWidth">
                    <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                        <div class="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-marginDense">
                            <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">search</span>
                        </div>
                        <input aria-invalid="false" name="query" placeholder="Search here..." type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="" />
                        <fieldset aria-hidden="true" class="jss8322 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: "8px" }}>
                            <legend class="jss8323" style={{ width: "0.01px" }}>
                                <span>
                                </span>
                            </legend>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="px-4">
                <div class="MuiPaper-root MuiCard-root p-4 mb-4 MuiPaper-elevation3 MuiPaper-rounded">
                    <h6 class="m-0 mb-4">Price</h6>
                    <fieldset class="MuiFormControl-root w-full">
                        <div class="MuiFormGroup-root" role="radiogroup" aria-label="status">
                            <label class="MuiFormControlLabel-root h-32">
                                <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span class="MuiIconButton-label">
                                        <input class="jss8329" name="status" type="radio" value="0,10" />
                                        <div class="jss8330">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                                                </path>
                                            </svg>
                                            <svg class="MuiSvgIcon-root jss8331" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </span>
                                    <span class="MuiTouchRipple-root"></span>
                                </span>
                                <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">&lt;$10</span>
                            </label>
                            <label class="MuiFormControlLabel-root h-32">
                                <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span class="MuiIconButton-label">
                                        <input class="jss8329" name="status" type="radio" value="10,100" />
                                        <div class="jss8330">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                                                </path>
                                            </svg>
                                            <svg class="MuiSvgIcon-root jss8331" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </span>
                                    <span class="MuiTouchRipple-root">
                                    </span>
                                </span>
                                <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">$10-$100</span>
                            </label>
                            <label class="MuiFormControlLabel-root h-32">
                                <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span class="MuiIconButton-label">
                                        <input class="jss8329" name="status" type="radio" value="100,500"/>
                                            <div class="jss8330">
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                                                    </path>
                                                </svg>
                                                <svg class="MuiSvgIcon-root jss8331" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z">
                                                    </path>
                                                </svg>
                                            </div>
                                    </span>
                                    <span class="MuiTouchRipple-root"></span>
                                </span>
                                <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">$100-$500</span>
                            </label>
                            <label class="MuiFormControlLabel-root h-32">
                                <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span class="MuiIconButton-label">
                                        <input class="jss8329" name="status" type="radio" value="500"/>
                                        <div class="jss8330">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg><svg class="MuiSvgIcon-root jss8331" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z">
                                                </path>
                                            </svg>
                                        </div>
                                </span>
                                <span class="MuiTouchRipple-root">
                                </span>
                                </span>
                                <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">&gt;$500</span>
                            </label>
                            <label class="MuiFormControlLabel-root h-32">
                                <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiRadio-root MuiRadio-colorSecondary jss8327 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span class="MuiIconButton-label">
                                        <input class="jss8329" name="status" type="radio" value="all" checked=""/>
                                            <div class="jss8330 jss8332">
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                                                    </path>
                                                </svg>
                                                <svg class="MuiSvgIcon-root jss8331" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </span>
                                    <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">All</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div class="MuiPaper-root MuiCard-root relative p-4 mb-4 MuiPaper-elevation3 MuiPaper-rounded">
                        <h5 class="m-0 mb-4">Brands</h5>
                        <div class="MuiFormControl-root MuiTextField-root mb-4 MuiFormControl-fullWidth">
                            <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                <div class="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-marginDense">
                                    <span class="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true">search</span>
                                </div>
                                <input aria-invalid="false" placeholder="Search here..." type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value=""/>
                                <fieldset aria-hidden="true" class="jss8322 MuiOutlinedInput-notchedOutline" style={{paddingLeft: "8px"}}>
                                    <legend class="jss8323" style={{width: "0.01px"}}>
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <label class="MuiFormControlLabel-root flex-grow">
                                <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span class="MuiIconButton-label">
                                        <input class="jss8329" name="Microlab" type="checkbox" data-indeterminate="false" value=""/>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                        </svg>
                                    </span>
                                    <span class="MuiTouchRipple-root"></span>
                                </span>
                                <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Microlab</span>
                            </label>
                            <small class="badge bg-light-primary text-primary">32</small>
                            </div>
                            <div class="flex items-center justify-between">
                                <label class="MuiFormControlLabel-root flex-grow">
                                    <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                        <span class="MuiIconButton-label">
                                            <input class="jss8329" name="Sony" type="checkbox" data-indeterminate="false" value=""/>
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                </svg>
                                        </span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </span>
                                    <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Sony</span>
                                </label><small class="badge bg-light-primary text-primary">534</small>
                            </div>
                            <div class="flex items-center justify-between">
                                <label class="MuiFormControlLabel-root flex-grow">
                                    <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                        <span class="MuiIconButton-label">
                                            <input class="jss8329" name="Beats" type="checkbox" data-indeterminate="false" value=""/>
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                </svg>
                                        </span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </span>
                                    <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Beats</span>
                                </label>
                                <small class="badge bg-light-primary text-primary">23</small>
                            </div>
                            <div class="flex items-center justify-between">
                                <label class="MuiFormControlLabel-root flex-grow">
                                    <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                        <span class="MuiIconButton-label">
                                            <input class="jss8329" name="Iphone" type="checkbox" data-indeterminate="false" value=""/>
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                            </svg>
                                        </span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </span>
                                    <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Iphone</span>
                                </label>
                                <small class="badge bg-light-primary text-primary">65</small>
                            </div>
                            <div class="flex items-center justify-between">
                                <label class="MuiFormControlLabel-root flex-grow">
                                    <span class="MuiButtonBase-root MuiIconButton-root jss8326 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                        <span class="MuiIconButton-label">
                                            <input class="jss8329" name="Comlion" type="checkbox" data-indeterminate="false" value=""/>
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </span>
                                    <span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Comlion</span>
                                </label>
                                <small class="badge bg-light-primary text-primary">198</small>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default DrugSearch