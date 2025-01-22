import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { use } from 'react'
import axios from 'axios'

const Login = () => {
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  function capValue(){
    // console.log(form)
    axios.post('/api/users/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token);
        navigate('/blogs');
      }
      else{
        navigate('/');
      }
      
    }).catch((error)=>{
      alert('Invalid login credentials');
      
    })
  }
  return (
    <div style={{margin:'8%',textAlign:'center'}}>
        <Typography variant='h5' style={{color:'PURPLE'}}>BlogApp Login</Typography><br />
<div>
<TextField label='Email' name='email' onChange={(e)=>{setForm({...form,email:e.target.value})}}

></TextField><br /><br />
</div>
        <div>
        <TextField   type="password" label='Password' name='password' onChange={(e)=>{setForm({...form,password:e.target.value})}}></TextField><br />
        </div>
        
       <br />
       
       <Button variant='contained' color='secondary' onClick={capValue}>Login</Button>

       <div>
        <br />
        <Link to={'/signup'}>New User? Please Register Here</Link>
       </div>
       </div>
       
  )
}

export default Login