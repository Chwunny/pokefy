import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/Profile.css'
// import { useState } from 'react'
// import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import Header from './Header'

const Profile = (props) => {
    const [username, setUsername] = useState("")

    useEffect(() => {
        axios.post('/auth/username').then(res => {
            setUsername("  " + res.data)
        })
    })
    
    return (
        <>
            <Header name={"Profile"} history={props.history}/>
        <div className="app login">

            <div className="profileContainer">
                <div className="guiContainer1">
                    <h1>Profile</h1>
                </div>
                <div className="guiContainer2">
                    <input type="text" placeholder={username} className="profileInput" />
                    <input type="text" placeholder="  Password" className="profileInput" />
                    <input type="text" placeholder="  New Password" className="profileInput" />
                    <input type="text" placeholder="  Confirm Password" className="profileInput" />

                </div>
                <div className="guiContainer3">
                    <button className="profileBtn deleteAcct">Delete Account</button>
                    <button className="profileBtn save">Save</button>
                </div>
            </div>

        </div>
        </>
    )
}

function mapStateToProps(state){
    return state.status
}

export default connect(mapStateToProps)(Profile)
