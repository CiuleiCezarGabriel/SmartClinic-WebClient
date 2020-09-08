import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './utils'
import { useEffect } from 'react'
import { PrivateRoute } from './components/PrivateRoute'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import PatientPage from './pages/PatientPage'
import AdminPage from './pages/AdminPage/AdminPage.js'
import DoctorPage from './pages/DoctorPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage/HomePage';
import RegisterUserPage from './pages/RegisterUserPage'
import QuestionPage from './pages/QuestionPage'
import AppointmentPage from './pages/AppointmentPage'
import NavBar from './components/navbar/NavBar';
import TopBar from './components/TopBar/TopBar';
import DoctorList from './pages/DoctorList/DoctorsList.js'
import PharmacyPage from './pages/PharmacyPage/PharmacyPage.js'
import Services from './pages/Services/Services';
import Dermatologie from './pages/Services/ServicesPages/Dermatologie/Dermatologie';
import BottomBar from './components/BottomBar/BottomBar';
import './app.scss';
import DiagnosisPage from './pages/DiagnosisPage';

function App() {

    useEffect(() => {
        history.listen((location, action) => {
        });
    }, []);


    function handleHome() {
        history.push('/');
    }

    return (
        <div>
            <NavBar></NavBar>

            <div class="relative flex-grow">
                <TopBar> </TopBar>
                <div class="m-sm-30">
                    <div class="flex-column justify-center items-center  py-16">
                        <div class="MuiFormControl-root MuiTextField-root max-w-400 MuiFormControl-fullWidth">
                            <Router history={history}>
                                <Switch>
                                    <PrivateRoute path="/patient" component={PatientPage}></PrivateRoute>
                                    <PrivateRoute path="/doctor" component={DoctorPage}></PrivateRoute>
                                    <PrivateRoute path="/admin" component={AdminPage}></PrivateRoute>
                                    <Route path="/resetPassword" component={ForgotPasswordPage}></Route>
                                    <Route path="/login" exact component={LoginPage}></Route>
                                    <Route path="/register" component={RegisterPage}></Route>
                                    <Route path="/services" component={Services}></Route>
                                    <Route path="/Dermatologie" component={Dermatologie}></Route>
                                    <PrivateRoute path="/registerNewUser" component={RegisterUserPage}></PrivateRoute>
                                    <PrivateRoute path="/questions" component={QuestionPage}></PrivateRoute>
                                    <PrivateRoute path="/appointments" component={AppointmentPage}></PrivateRoute>
                                    <PrivateRoute path="/diagnosis" component={DiagnosisPage}></PrivateRoute>
                                    <PrivateRoute path="/doctorList" component={DoctorList}></PrivateRoute>
                                    <PrivateRoute path="/pharmacy" component={PharmacyPage}></PrivateRoute>
                                    <Route path="/" component={HomePage}></Route>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                    <BottomBar />
                </div>

            </div>

            <div class="secondary-sidebar jss691 jss692">
                <span class="m-auto">
                </span>
                <span class="jss693" title="Theme Settings" onClick={() => handleHome()}> SMART CLINIC</span>
                <span class="m-auto">
                </span>
            </div>

        </div>


    )
}

export default App; 