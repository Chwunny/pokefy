import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Homepage = () => {
    const [token, setToken] = useState("")

    useEffect(() => {
        axios.post('/auth/token').then(res => {
            console.log(res.data);
            setToken(res.data)
        })

    }, [])

    return (
        <div>
            Welcome to the homepage
        </div>
    )
}

export default Homepage
