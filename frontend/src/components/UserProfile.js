import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Avatar } from '@mui/material';

const UserProfile = () => {
    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#2F2F2F', color: '#FFFFFF', borderRadius: '8px', padding: '50px', marginTop: '50px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar src="/avatar.png" alt="Profile Picture" style={{ width: '100px', height: '100px', marginBottom: '20px', cursor: 'pointer', border: '2px solid #FFFFFF' }} />
          <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '300' }}>Change your Avatar</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Name"
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Username"
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            style={{ marginBottom: '30px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <Button variant="contained" color="primary" style={{ backgroundColor: '#0077B6', width: '100%', padding: '10px' }}> Update Profile</Button>
        </Box>
      </Container>
    );
};

export default UserProfile;

