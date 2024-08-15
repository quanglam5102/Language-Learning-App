import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Avatar, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
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
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          style={{ marginBottom: '15px', backgroundColor: '#333333' }}
          InputLabelProps={{ style: { color: '#AAAAAA' } }}
          InputProps={{ style: { color: '#FFFFFF' } }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Username"
          // value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
          style={{ marginBottom: '15px', backgroundColor: '#333333' }}
          InputLabelProps={{ style: { color: '#AAAAAA' } }}
          InputProps={{ style: { color: '#FFFFFF' } }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Password"
          // type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
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
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          style={{ marginBottom: '30px', backgroundColor: '#333333' }}
          InputLabelProps={{ style: { color: '#AAAAAA' } }}
          InputProps={{ style: { color: '#FFFFFF' } }}
        />
        <Button variant="contained" color="primary" style={{ backgroundColor: '#0077B6', width: '100%', padding: '10px' }} onClick={handleUpdateProfile}>
          Update Profile
        </Button>
      </Box>
    </Container>
  );
};

export default UserProfile;
