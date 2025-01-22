import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import AddBlock from './components/AddBlock'
import Signup from './components/Signup'
import Navbar1 from './components/Navbar1'
import Main1 from './components/Main1'
import PrivateRoutes from './components/PrivateRoutes'


const App = () => {
  return (
    <>
  
  
      <Routes>
        <Route path='/' element={<PrivateRoutes>Login</PrivateRoutes>}></Route>
        <Route path='/signup' element={<PrivateRoutes>Signup</PrivateRoutes>}></Route>
        <Route path='/blogs' element={<Main1 child={<Home/>}/>}></Route>
        <Route path='/addblogs' element={<Main1 child={<AddBlock/>}/>}></Route>
      </Routes>
    </>
  )
}

export default App