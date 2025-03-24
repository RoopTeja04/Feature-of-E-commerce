import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Create from './Authentication/Create';
import Home from './Home';
import Homepage from './MainPage/Homepage';

const App = () => {
  
  const Logined = localStorage.getItem("Login") === "true";

  return(
    <>
      <Routes>
        <Route
          path='/' element = { Logined ? <Navigate to="/home" /> : <Login />}
        />
        <Route path='/create-account' element = { <Create /> } />
        <Route
          path='/home' element = { Logined ? <Home /> : <Navigate to="/" /> }
        >
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </>
  )

}

export default App;