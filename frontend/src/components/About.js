import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; // Note the capital "F"
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const About = () => {

    return <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                Create a room
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <FormControl component='fieldset'>
                <FormHelperText style={{ textAlign: 'center' }}>
                    <span align="center">Guest Control</span>
                </FormHelperText>
                <RadioGroup row defaultValue='true'>
                    <FormControlLabel value='true' control={<Radio color='primary'/>} label='Play/Pause' labelPlacement='bottom'/>
                    <FormControlLabel value='fa;se' control={<Radio color='secondary'/>} label='No Control' labelPlacement='bottom'/>
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
            <FormControl>
                <TextField required={true} type='number' defaultValue='0' inputProps={{min:1, style: {textAlign: 'center'}}}/>
                <FormHelperText style={{ textAlign: 'center' }}><span align="center">This field is required</span></FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color='primary' variant='contained' style={{ width: 'auto' }}>Submit</Button>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color='secondary' to='/' component={Link} variant='contained'>Back to Home Page</Button>
        </Grid>
    </Grid>
};

export default About;