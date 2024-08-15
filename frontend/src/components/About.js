import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Link } from '@mui/material';
import { Info as InfoIcon, Language as LanguageIcon, Group as GroupIcon } from '@mui/icons-material';

const images = {
  interactive: 'https://via.placeholder.com/150',
  languages: 'https://via.placeholder.com/150',
  community: 'https://via.placeholder.com/150'
};

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="h5" paragraph align="center">
          Welcome to LanguageLearn, your ultimate language learning companion!
        </Typography>
        <Typography variant="body1" paragraph>
          At LanguageLearn, we believe that language learning should be engaging, interactive, and accessible. Our app offers a wide range of features to help you master new languages efficiently and effectively. Whether you're a beginner or an advanced learner, we have something for everyone.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <InfoIcon color="primary" sx={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Interactive Lessons
              </Typography>
              <Typography variant="body2">
                Dive into interactive lessons designed to make learning fun and engaging. Our lessons cover a variety of topics and skill levels.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <LanguageIcon color="secondary" sx={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Multiple Languages
              </Typography>
              <Typography variant="body2">
                Learn multiple languages with our comprehensive course offerings. From Spanish to Mandarin, we have you covered.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <GroupIcon color="action" sx={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Community Support
              </Typography>
              <Typography variant="body2">
                Join a community of learners and get support from fellow students and experts. Share your progress and tips for success.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" href="/">
            Get Started
          </Button>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom align="center">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We are dedicated to making language learning accessible to everyone, everywhere. Our mission is to provide high-quality educational content and a supportive community to help learners achieve their language goals.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Meet the Team
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <img src="../../static/images/Jane.jpeg" alt="Jane Doe" style={{ width: 100, height: 100, borderRadius: '50%' }} />
                <Typography variant="h6" gutterBottom>
                  Jane Doe
                </Typography>
                <Typography variant="body2">Container
                  Founder & CEO
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <img src="../../static/images/John.jpeg" alt="John Smith" style={{ width: 100, height: 100, borderRadius: '50%' }} />
                <Typography variant="h6" gutterBottom>
                  John Smith
                </Typography>
                <Typography variant="body2">
                  Chief Technology Officer
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <img src="../../static/images/Emily.jpeg" alt="Emily Johnson" style={{ width: 100, height: 100, borderRadius: '50%' }} />
                <Typography variant="h6" gutterBottom>
                  Emily Johnson
                </Typography>
                <Typography variant="body2">
                  Head of Content
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer Component */}
      <Box
        sx={{
          p: 2,
          mt: 4,
          bgcolor: 'background.paper',
          boxShadow: 1,
          textAlign: 'center',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} LanguageLearn. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact us: <Link href="mailto:info@languagelearn.com">info@languagelearn.com</Link> | 
          <Link href="tel:+1234567890" sx={{ ml: 1 }}>+1 (234) 567-890</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
