import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = () => {
  const [login, setLogin] = useState(false)
  

  return (
    <div>
      {!login ? <Login setLogin={setLogin} /> : <Homepage />}
    </div>
  )
}

export default App