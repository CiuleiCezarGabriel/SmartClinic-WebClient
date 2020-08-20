import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './utils'
import { useEffect } from 'react'
import {PrivateRoute} from './components/PrivateRoute'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PatientPage from './pages/PatientPage'
import AdminPage from './pages/AdminPage'
import DoctorPage from './pages/DoctorPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import RegisterUserPage from './pages/RegisterUserPage'
import QuestionPage from './pages/QuestionPage'
import './app.scss';

function App() {
    useEffect(() => {
        history.listen((location, action) => {
        });
    }, []);

    return (
        <div class="scrollbar-container h-full-screen ps">
            <div class="bg-default theme-light flex">
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
                        <Route path="/" component={HomePage}></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App; 