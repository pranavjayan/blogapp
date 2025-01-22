import { Typography, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosInterceptor';

const AddBlock = () => {
    const [blog,setBlog]=useState({
      title:'',
      description:'',
      image:''
    });

    const navigate=useNavigate();
    const location=useLocation();

    function addBlog(){
      if (location.state!=null) {
        axiosInstance.put('/api/blogs/edit/'+location.state.val._id,blog).then((res)=>{
        alert(res.data.message);
        navigate('/blogs');
        })
      } else {
        axiosInstance.post('/api/blogs/blog/post',blog).then((res)=>{
          alert(res.data.message);
          navigate('/blogs');
        }).catch((error)=>{
          alert('Upload Failed');
          
        })
      }
   
    }
    useEffect(()=>{
      if (location.state!=null) {
        setBlog({...blog,title:location.state.val.title,
          description:location.state.val.description,
          image:location.state.val.image
        })

        
      } else {
        setBlog({...blog,title:'',description:'',image:''})
        
      }
    },[])
    return (
      <div>
          <Typography variant='h5' style={{color:'purple'}}>Add Blogs</Typography><br />
          <Grid container spacing={2}>
          <Grid size={{xs:6,md:6}}>
      <TextField  label='Title' variant='outlined' name='title' value={blog.title} fullWidth required onChange={(e)=>setBlog(({...blog,title:e.target.value}))}></TextField><br />
    </Grid>
    <Grid size={{xs:6,md:6}}>
      <TextField  label='Image URL' variant='outlined' name='image' value={blog.image} fullWidth required onChange={(e)=>setBlog(({...blog,image:e.target.value}))}></TextField><br />
    </Grid>
    <Grid size={{xs:12,md:12}}>
      <TextField  label='Description' variant='outlined' name='description' value={blog.description} fullWidth required multiline rows={4} onChange={(e)=>setBlog(({...blog,description:e.target.value}))}></TextField><br />
    </Grid>
    <Grid size={{xs:12,md:12}}>
              <Button  variant="contained" color="secondary" onClick={addBlog}>
                Add Blog
              </Button>
            </Grid>
    </Grid>
    
      </div>
    )
    }
  


export default AddBlock