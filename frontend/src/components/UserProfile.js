import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Avatar, IconButton } from '@mui/material';
import { useAuth } from "./AuthProvider";
import { PhotoCamera } from '@mui/icons-material';

const UserProfile = () => {
    const { isAuthenticated } = useAuth();
    const [username, setUsername] = useState('Default Username');
    const [password, setPassword] = useState('******');
    const [phone, setPhone] = useState('xxx xxx-xxxx');
    const [email, setEmail] = useState('default@example.com');
    const [progress, setProgress] = useState('Default Name');
    const [createdAt, setCreatedAt] = useState('Default Name');
    const [errors, setErrors] = useState({});
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
  
  const [avatar, setAvatar] = useState('../../static/images/avatar.jpeg');

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name cannot be empty";
    if (!username) newErrors.username = "Username cannot be empty";
    if (!password) newErrors.password = "Password cannot be empty";
    if (!email) newErrors.email = "Email cannot be empty";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is not valid";

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateProfile = () => {
    if (validateForm()) {
      // Submit form or perform desired action
      console.log("Profile updated successfully!");
      // Reset the form if needed
      setName('');
      setUsername('');
      setPassword('');
      setEmail('');
      setErrors({});
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: '#2F2F2F', color: '#FFFFFF', borderRadius: '8px', padding: '50px', marginTop: '50px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: '20px' }}>
          <Avatar src={avatar} alt="Profile Picture" style={{ width: '100px', height: '100px', cursor: 'pointer', border: '2px solid #FFFFFF' }} />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{ position: 'absolute', bottom: 0, right: 0 }}
          >
            <input hidden accept="image/*" type="file" onChange={handleAvatarChange} />
            <PhotoCamera />
          </IconButton>
        </Box>
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
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.name}
            helperText={errors.password}
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
          onChange={(e) => setPhone(e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
          style={{ marginBottom: '15px', backgroundColor: '#333333' }}
          InputLabelProps={{ style: { color: '#AAAAAA' } }}
          InputProps={{ style: { color: '#FFFFFF' } }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Progess"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          error={!!errors.progress}
          helperText={errors.progress}
          style={{ marginBottom: '15px', backgroundColor: '#333333' }}
          InputLabelProps={{ style: { color: '#AAAAAA' } }}
          InputProps={{ style: { color: '#FFFFFF' } }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Created At"
          value={createdAt}

          error={!!errors.email}
          helperText={errors.email}
          style={{ marginBottom: '15px', backgroundColor: '#333333' }}
          InputLabelProps={{ style: { color: '#AAAAAA' } }}
          InputProps={{ style: { color: '#FFFFFF' }, readOnly: true, }}
        />
        <Button variant="contained" color="primary" style={{ backgroundColor: '#0077B6', width: '100%', padding: '10px' }} onClick={handleUpdateProfile}>
          Update Profile
        </Button>
      </Box>
    </Container>
  );
};

export default UserProfile;
