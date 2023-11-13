import { useState } from 'react'

import Register from './components/Register'
import PopUp from './components/PopUp'
import UserContextProvider from './context/UserContext'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const {error} = UserContextProvider();

  return (
    <>
      {/* <Navbar/> */}
      <Register/>
      <PopUp code = {error.errorCode} error = {error.errorMessage}/>
    </>
  )
}

export default App
