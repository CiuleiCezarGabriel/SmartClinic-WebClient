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
        <div class="scrollbar-container h-full-screen ps ps--active-y">

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
                    <div id="container">
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute path="/patient" component={PatientPage}></PrivateRoute>
                                <PrivateRoute path="/doctor" component={DoctorPage}></PrivateRoute>
                                <PrivateRoute path="/admin" component={AdminPage}></PrivateRoute>
                                <Route path="/resetPassword" component={ForgotPasswordPage}></Route>
                                <Route path="/login" exact component={LoginPage}></Route>
                                <Route path="/register" component={RegisterPage}></Route>
                                <PrivateRoute path="/registerNewUser" component={RegisterUserPage}></PrivateRoute>
                                <PrivateRoute path="/questions" component={QuestionPage}></PrivateRoute>
                                <PrivateRoute path="/appointments" component={AppointmentPage}></PrivateRoute>
                                <Route path="/" component={HomePage}></Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App; 