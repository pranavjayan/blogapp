import React, { useEffect, useState } from 'react'
import  {Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material/'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';


    const Home = () => {
    const[cardData,setData]=useState([])
  const navigate=useNavigate();
    useEffect(()=>{
      axiosInstance.get('/api/blogs').then((res)=>{
        setData(res.data)
      }).catch((err)=>{
        console.log(err)
      })

    },[])

    function update_data(val){
      navigate('/addblogs',{state:{val}});

    }

    function delete_data(val){
      axiosInstance.delete('/api/blogs/delete/'+val._id).then((res)=>{
        alert(res.data);
        setData(cardData.filter(row => row._id !== val._id));
        }).catch((err)=>{
          console.log(err);
   })
      }
  return (
    <div style={{margin:'8%'}}>
        <Grid container spacing={5}>
            {cardData.map((row)=>(

  <Grid size={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {row.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {row.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='warning' variant="contained" onClick={(()=>{
          update_data(row);
            })}>Update</Button>
        <Button size="small" color='error' variant="contained" onClick={(()=>{
          delete_data(row);
        })}>Delete</Button>
      </CardActions>
    </Card>
    </Grid>
    
))}
</Grid> 
    </div>

  )
}

export default Home