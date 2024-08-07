import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        name: '',
        phone_number: '',
        address: ''
        // Add other fields as needed
    });

    // useEffect(() => {
    //     // Fetch the user profile data when the component mounts
    //     fetch('/api/profile/')
    //         .then(response => {
    //             setProfile(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the profile!", error);
    //         });
    // }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the user profile
        axios.put('/api/profile/', profile)
            .then(response => {
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error("There was an error updating the profile!", error);
            });
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    User Profile
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2, width: '100%' } }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    name="phone_number"
                    value={profile.phone_number}
                    onChange={handleChange}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Update Profile
                </Button>
            </Box>
        </Container>
    );
};

export default UserProfile;

