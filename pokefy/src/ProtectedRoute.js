import React from 'react'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest}) => {
    // console.log(rest.isLoggedIn);
    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return rest.isLoggedIn ? <Component {...props}/> : <Redirect to="/login"/>
                }}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {...state.status}
}

export default connect(mapStateToProps)(ProtectedRoute)