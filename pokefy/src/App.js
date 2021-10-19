import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  

  return (
    <div className="App">
      {!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Homepage />}
    </div>
  )
}

export default App