import React from 'react'
// import { useState } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { setLoggedStatus } from '../redux/statusReducer'

const Profile = (props) => {
    
    return (
        <div>
            Profile
            <button onClick={() => setLoggedStatus(false)}>Logout</button>
            {!props.isLoggedIn ? <Redirect to="/"/> : null}
        </div>
    )
}

function mapStateToProps(state){
    return state.status
}

export default connect(mapStateToProps, {setLoggedStatus})(Profile)
