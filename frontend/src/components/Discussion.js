import React from 'react';
import { Box, Button, TextField, Typography, Container, Avatar } from '@mui/material';

function Discussion() {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          backgroundColor: '#1e1e1e',
          padding: 3,
          borderRadius: 3,
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center' }}>
          Discussion Forum
        </Typography>
        
        {/* Example comments HARDCODED */}
        {[
          { name: 'John', comment: 'This is a great app!' },
          { name: 'Alice', comment: 'I love learning languages here!' },
          { name: 'Eva', comment: 'For practicing speaking, I find it very useful.' },
        ].map((entry, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#2b2b2b',
              padding: 2,
              borderRadius: 2,
              marginBottom: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: '#616161', marginRight: 2 }}>{entry.name[0]}</Avatar>
            <Box>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                {entry.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                {entry.comment}
              </Typography>
            </Box>
          </Box>
        ))}

        {/* Add Comment */}
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Leave a comment..."
          multiline
          rows={3}
          sx={{
            backgroundColor: '#2b2b2b',
            borderRadius: 2,
            marginBottom: 3,
            input: { color: '#ffffff' },
          }}
          InputProps={{
            style: { color: '#ffffff' },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#007BFF',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
            borderRadius: 2,
            paddingY: 1.5,
            fontWeight: 'bold',
          }}
        >
          ADD COMMENT
        </Button>
      </Box>
    </Container>
  );
}

export default Discussion;
