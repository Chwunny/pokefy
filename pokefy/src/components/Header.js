import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
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
                    <h2 className="headerH2">Logout</h2>
                </div>
            </nav>
        </div>
    )
}

export default Header
