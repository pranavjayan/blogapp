import { AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const Navbar1 = () => {
  const navigate=useNavigate();
  function logout (){

    sessionStorage.removeItem('logintoken');
    navigate('/')
  }
  return (
    <div style={{margin:'8%'}}> <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{backgroundColor:'purple'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         BlogApp
        </Typography>
        <Link to={'/blogs'}><Button style={{color:'white'}}>Home</Button></Link>
        <Link to={'/addblogs'}><Button style={{color:'white'}}>Add Blog</Button></Link>
        <Link to={'/'}><Button style={{color:'white'}} onClick={logout}>Logout</Button></Link>
        
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Navbar1