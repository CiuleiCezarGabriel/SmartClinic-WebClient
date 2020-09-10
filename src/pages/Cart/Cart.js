import React from 'react'
import './cart.scss';




function Cart() {
    return (
        <div class="MuiPaper-rootnou MuiCard-rootnou m-sm-30nou jss2018nou MuiPaper-elevation3nou MuiPaper-roundednou">
            <div class="py-4nou px-4nou">
                <div class="MuiGrid-rootnou MuiGrid-containernou">
                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou"></div>
                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou">
                        <h6 class="m-0nou">Name</h6>
                    </div>
                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">Price</h6>
                    </div>
                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">Quantity</h6>
                    </div>
                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">Total</h6>
                    </div>
                </div>

            </div>
            <hr class="MuiDivider-rootnou"></hr>

            <div class="py-4nou px-4nou">
                <div class="MuiGrid-rootnou MuiGrid-containernou MuiGrid-align-items-xs-centernou">
                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou">
                        <div class="flexnou items-centernou">
                            <button class="MuiButtonBase-rootnou MuiIconButton-rootnou MuiIconButton-sizeSmallnou" tabindex="0" type="button">
                                <span class="MuiIconButton-labelnou">
                                    <span class="material-iconsnou MuiIcon-rootnou MuiIcon-fontSizeSmallnou" aria-hidden="true">clear</span>
                                </span>
                                <span class="MuiTouchRipple-rootnou">
                                </span>
                            </button>
                            <div class="px-4nou">
                                <img class="border-radius-4 w-fullnou" src="/src/assets/images/speaker-2.jpg" alt="Bass Speaker" />
                            </div>
                        </div>
                    </div>

                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou">
                        <h6 class="m-0nou">Bass Speaker</h6>
                        <p class="mt-2nou m-0nou text-mutednou">Aici nu stiu ce sa pun. Paracetamol and stuff </p>
                    </div>

                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">$454</h6>
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
                        <h6 class="m-0nou">$454</h6>
                    </div>

                </div>

            </div>
            <div class="py-4nou px-4nou">
                <div class="MuiGrid-rootnou MuiGrid-containernou MuiGrid-align-items-xs-centernou">
                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou">
                        <div class="flexnou items-centernou">
                            <button class="MuiButtonBase-rootnou MuiIconButton-rootnou MuiIconButton-sizeSmallnou" tabindex="0" type="button">
                                <span class="MuiIconButton-labelnou">
                                    <span class="material-iconsnou MuiIcon-rootnou MuiIcon-fontSizeSmallnou" aria-hidden="true">clear</span>
                                </span>
                                <span class="MuiTouchRipple-rootnou">
                                </span>
                            </button>
                            <div class="px-4nou">
                                <img class="border-radius-4 w-fullnou" src="/src/assets/images/speaker-2.jpg" alt="Bass Speaker" />
                            </div>
                        </div>
                    </div>

                    <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou">
                        <h6 class="m-0nou">Bass Speaker</h6>
                        <p class="mt-2nou m-0nou text-mutednou">Aici nu stiu ce sa pun. Paracetamol and stuff </p>
                    </div>

                    <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                        <h6 class="m-0nou">$454</h6>
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
                        <h6 class="m-0nou">$454</h6>
                    </div>

                </div>
            </div>
            <hr class="MuiDivider-rootnou mb-12nou" />
            <div class="MuiGrid-rootnou mb-12nou px-4nou MuiGrid-containernou">
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-3nou MuiGrid-grid-sm-3nou MuiGrid-grid-md-3nou MuiGrid-grid-lg-3nou"></div>
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-4nou MuiGrid-grid-sm-4nou MuiGrid-grid-md-4nou MuiGrid-grid-lg-4nou"></div>
                <div class="MuiGrid-rootnou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou"></div>
                <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                    <h6 class="m-0nou">Total</h6>
                </div>
                <div class="MuiGrid-rootnou text-centernou MuiGrid-itemnou MuiGrid-grid-xs-truenou MuiGrid-grid-sm-truenou MuiGrid-grid-md-truenou MuiGrid-grid-lg-truenou">
                    <h6 class="m-0nou">$538.00</h6>
                </div>

                <div class="flexnou items-centernou mb-4nou px-4nou">
                    <div class="MuiFormControl-rootnou MuiTextField-rootnou flex-grownou">
                       
                    </div>
                    <button class="MuiButtonBase-rootnou MuiButton-rootnou MuiButton-containednou mx-3nou MuiButton-containedSecondarynou" tabindex="0" type="button">
                        <span class="MuiButton-labelnou">Apply</span>
                        <span class="MuiTouchRipple-rootnou"></span>
                    </button>
                    <button class="MuiButtonBase-rootnou MuiButton-rootnou MuiButton-containednou MuiButton-containedPrimarynou" tabindex="0" type="button">
                        <span class="MuiButton-labelnou">Checkout</span>
                        <span class="MuiTouchRipple-root"></span>
                    </button></div>


            </div>
            
            <form style={{ marginLeft: "0%"}} action="">
                <input style={{width: "50%", marginLeft: "5%"}} type="text1" id="fname" name="DiagnosisName" placeholder="Diagnosis Name" />
                <br></br>
                <input style={{width: "50%", marginLeft: "5%"}} type="text1" id="fname" name="DiagnosisDescription" placeholder="Diagnosis Description" />
                <input style={{width: "50%", marginLeft: "5%"}}  type="submit1" value="Submit" />
            </form>
            
        </div>



    )

}


export default Cart;