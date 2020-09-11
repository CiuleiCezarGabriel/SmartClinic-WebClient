import React from 'react'
import reactDOM from 'React-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './utils'
import { useEffect } from 'react'
import { PrivateRoute } from './components/PrivateRoute'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import PatientPage from './pages/PatientPage/PatientPage'
import AdminPage from './pages/AdminPage/AdminPage.js'
import DoctorPage from './pages/DoctorPage/DoctorPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage/HomePage';
import RegisterUserPage from './pages/RegisterUserPage';
import QuestionPage from './pages/QuestionPage';
import AppointmentPage from './pages/AppointmentPage';
import NavBar from './components/navbar/NavBar';
//import Stepper from './components/Stepper/Stepper';
import TopBar from './components/TopBar/TopBar';
import DoctorList from './pages/DoctorList/DoctorsList.js';
import PharmacyPage from './pages/PharmacyPage/PharmacyPage.js';
import Services from './pages/Services/Services';
import Dermatologie from './pages/Services/ServicesPages/Dermatologie/Dermatologie';
import Cardiologie from './pages/Services/ServicesPages/Cardiologie/Cardiologie';
import Urologie from './pages/Services/ServicesPages/Urologie/Urologie';
import Neurologie from './pages/Services/ServicesPages/Neurologie/Neurologie';
import Pedriatie from './pages/Services/ServicesPages/Pedriatie/Pedriatie';
import Nutritie from './pages/Services/ServicesPages/Nutritie/Nutritie';
import BottomBar from './components/BottomBar/BottomBar';
import DiagnosisPage from './pages/Diagnosis/DiagnosisPage';
import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/ShopPage/CartPage'
import './app.scss';



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
                                    <Route path="/Cardiologie" component={Cardiologie}></Route>
                                    <Route path="/Urologie" component={Urologie}></Route>
                                    <Route path="/Neurologie" component={Neurologie}></Route>
                                    <Route path="/Pedriatie" component={Pedriatie}></Route>
                                    <Route path="/Nutritie" component={Nutritie}></Route>
                                    <Route path="/Shop" component={ShopPage}></Route>
                                    <Route path="/createCart" component={CartPage}></Route>
                                    
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