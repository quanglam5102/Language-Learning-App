import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Avatar } from '@mui/material';
import { useAuth } from "./AuthProvider";

const UserProfile = () => {
    const { isAuthenticated } = useAuth();
    const [username, setUsername] = useState('Default Username');
    const [password, setPassword] = useState('******');
    const [phone, setPhone] = useState('xxx xxx-xxxx');
    const [email, setEmail] = useState('default@example.com');
    const [progress, setProgress] = useState('Default Name');
    const [createdAt, setCreatedAt] = useState('Default Name');
    const [error, setError] = useState('');
    useEffect(() => {
      if (!isAuthenticated) {
        
      }
      else {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              email: localStorage.getItem('email'),
          }),
      };
        fetch('/api/get-user', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if(data.username != null) {
              setPhone(data.phone);
              setUsername(data.username);
              setPassword(data.password); 
              setEmail(data.email);
              setProgress(data.progress);
              setCreatedAt(new Date(data.createdAt).toLocaleDateString());
            }
            else {
              setError('Error retrieving user data.');
            }
          })
          .catch((error) => console.log('Something went wrong. Please try again', error));
      }
    }, []);
    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#2F2F2F', color: '#FFFFFF', borderRadius: '8px', padding: '50px', marginTop: '50px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar src="../../static/images/avatar.jpeg" alt="Profile Picture" style={{ width: '100px', height: '100px', marginBottom: '20px', cursor: 'pointer', border: '2px solid #FFFFFF' }} />
          <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '300' }}>Change your Avatar</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Username"
            value={username}
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            value={password}
            type="password"
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            value={email}
            style={{ marginBottom: '30px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Phone Number"
            value={phone}
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Progess"
            value={progress}
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Created At"
            value={createdAt}
            style={{ marginBottom: '15px', backgroundColor: '#333333' }}
            InputLabelProps={{ style: { color: '#AAAAAA' } }}
            InputProps={{ style: { color: '#FFFFFF' } }}
          />
          <Button variant="contained" color="primary" style={{ backgroundColor: '#0077B6', width: '100%', padding: '10px' }}> Update Profile</Button>
        </Box>
      </Container>
    );
};

export default UserProfile;

