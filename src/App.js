import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './utils'
import { useEffect } from 'react'
import { PrivateRoute } from './components/PrivateRoute'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PatientPage from './pages/PatientPage'
import AdminPage from './pages/AdminPage'
import DoctorPage from './pages/DoctorPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage/HomePage';
import RegisterUserPage from './pages/RegisterUserPage'
import QuestionPage from './pages/QuestionPage'
import AppointmentPage from './pages/AppointmentPage'
import NavBar from './components/navbar/NavBar';
import './app.scss';
import TopBar from './components/TopBar/TopBar';

//import PictureContent from './components/PictureContent/PictureContent';
//import DespreNoi from './components/DespreNoi/DespreNoi';

function App() {
    useEffect(() => {
        history.listen((location, action) => {
        });
    }, []);

    return (
        <div class="scrollbar-container h-full-screen ps">
            {/*<div class="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                    <div class="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
                    <div class="ps__rail-y" style={{top: "0px", right: "0px", height: "188px"}}></div>
    <div class="ps__thumb-y" tabindex="0" style={{top: "0px", height: "0px"}}></div>*/}
            <div class="bg-default theme-light flex">

                <NavBar></NavBar>
                <div class="flex-grow flex-column relative overflow-hidden h-full-screen jss1476 jss1478" style={{ marginLeft: "243px" }}>

                    <div class="jss1512">
                        <div>
                        
                        </div>
                        <div class="content-wrap position-relative">
                            <TopBar> </TopBar>
                        </div>
                    </div>

                    <Router history={history}>
                        <Switch>
                            <PrivateRoute path="/patient" component={PatientPage}></PrivateRoute>
                            <PrivateRoute path="/doctor" component={DoctorPage}></PrivateRoute>
                            <PrivateRoute path="/admin" component={AdminPage}></PrivateRoute>
                            <Route path="/resetPassword" component={ForgotPasswordPage}></Route>
                            <Route path="/login" exact component={LoginPage}></Route>
                            <Route path="/register" component={RegisterPage}></Route>
                            <Route path="/registerNewUser" component={RegisterUserPage}></Route>
                            <Route path="/questions" component={QuestionPage}></Route>
                            <Route path="/appointments" component={AppointmentPage}></Route>
                            <Route path="/" component={HomePage}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default App; 