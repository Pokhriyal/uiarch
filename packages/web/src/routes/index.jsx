import React, { Component, lazy } from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from  '@components/Login';
import Dashboard from  '@components/Dashboard';
export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" name="Login" component={Login} />
                    <Route exact path="/dashboard" name="Login" component={Dashboard} />
                    {/* <Route path="*" name="Error 404" component={Error404Component} /> */}
                </Switch>
            </React.Fragment>
        )
    }
}