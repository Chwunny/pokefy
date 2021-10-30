import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import '../styles/Header.css'

const Header = (props) => {
    const logout = () => {
        console.log('attempting to logout');
        axios.get('/auth/logout').then(res => {
            props.dispatch({ type: "LOG_STATUS", payload: false})
            // props.history.push("/")
        })
    }

    return (
        <div>
            <div className="spacer none"></div>
            <nav className="nav">
                <div className="navItem1">
                    <h1 className="headerH1">{props.name}</h1>
                </div>
                <div className="navItem2">
                    <h2 className="headerH2">Dashboard</h2>
                    <h2 className="headerH2">Profile</h2>
                    <h2 className="headerH2" onClick={logout}>Logout</h2>
                </div>
            </nav>
        </div>
    )
}

function mapStateToProps(state) {
    return {...state.status, ...state.token }
}

export default connect(mapStateToProps)(Header)
