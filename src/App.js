import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import PatientPage from './components/PatientPage'
import AdminPage from './components/AdminPage'
import DoctorPage from './components/DoctorPage'
import { history } from './utils'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';


function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        history.listen((location, action) => {
        });
    }, []);

    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/patient" component={PatientPage}></PrivateRoute>
                <PrivateRoute path="/doctor" component={DoctorPage}></PrivateRoute>
                <PrivateRoute path="/admin" component={AdminPage}></PrivateRoute>
                <Route path="/login" exact component={LoginPage}></Route>
                <Route path="/register" component={RegisterPage}></Route>
            </Switch>
        </Router>
    )
}

export default App; 