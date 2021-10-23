import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import TestAPI from './components/TestAPI'

export default (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/test" component={TestAPI}/>
        <ProtectedRoute exact path="/" component={Dashboard}/>
        <ProtectedRoute exact path="/profile" component={Profile}/>
    </Switch>
)