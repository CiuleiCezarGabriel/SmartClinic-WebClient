import React from 'react'
import { userService } from '../services'

function ForgotPasswordPage() {

    const [email, setEmail] = React.useState([])

    function handleSubmit(e) {
        e.preventDefault();
        userService.forgotPassword(email)
    }

    function handleChange() {
        setEmail(document.getElementById("email").value)
    }

    return (
        /*<div>
            <div>
                <h2> Reset Password Page</h2>
                <form id="form" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" id="email" onChange={handleChange} />
                    <button className="btn btn-primary">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>*/
        <div>
            <div class="formm" style={{ width: "100%", backgroundColor: "#fff" }} >
                <div class="">
                    <div class="">
                        <div class="col-md-4 col-md-offset-4" style={{ alignItems: "center", marginLeft: "30%" }}>
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="text-center">
                                        <h3><i class="fa fa-lock fa-4x"></i></h3>
                                        <h2 class="text-center" style={{ marginLeft: "22.3%", paddingTop: "1rem" }}>Forgot Password?</h2>
                                        <p style={{ marginLeft: "14.3%" }}>You can reset your password here:</p>
                                        <div class="panel-body">

                                            <form  onSubmit={handleSubmit}>
                                                <fieldset>
                                                    <div class="form-group">
                                                            <input  placeholder="email address" class="form-control" type="text" id="email" style={{ marginLeft: "14.3%" }} onChange={handleChange} />
                                                    </div>
                                                    <input class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" style={{ marginLeft: "14.3%" }} />
                                                </fieldset>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><img class="mb-4 h-152 w-152" src="/src/assets/images/fff.jpg" style={{ height: "300px", width: "75%", marginLeft: "12.3%" }} alt="Starter"></img>
            </div>




        </div>
    )
}

export default ForgotPasswordPage