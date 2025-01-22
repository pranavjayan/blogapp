import React from 'react'
import Grid from '@mui/material/Grid2';
import { TextField,Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (


    <div style={{margin:'8%', textAlign:'center', alignItems:'center'}}>
        <Typography variant='h5' style={{color:'PURPLE'}}>BlogApp Signup</Typography><br />
        <Grid container spacing={2}>
  <Grid size={{xs:6,md:6}}>
    <TextField  label='Full Name' variant='outlined' fullWidth required></TextField>
  </Grid>
  <Grid size={{xs:6,md:6}}>
            <TextField  label="Email" variant='outlined' fullWidth required />
          </Grid>
          <Grid size={{xs:6,md:6}}>
            <TextField  label="Phone" variant='outlined' fullWidth  />
          </Grid>
          <Grid size={{xs:6,md:6}}>
            <TextField  label="Password" type='password' required  fullWidth/>
          </Grid>
          <Grid size={{xs:12,md:12}}>
            <TextField  label="Address" variant='outlined' fullWidth multiline rows={4} />
          </Grid>

          

          <Grid size={{xs:12,md:12}}>
            <Button  variant="contained" color="secondary">
              Signup
            </Button>
          </Grid>
          <Grid size={{xs:12,md:12}}>
            <Link to={'/'} style={{color:'purple'}}>Already have an account? Login</Link>
          </Grid>
  </Grid>

    </div>
  )
}

export default Signup