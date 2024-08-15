import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Avatar, IconButton } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const userComments = [  // Hardcoded users comment *temporarily*
  { name: 'John Cena', comment: 'This is a great app!',  avatar: 'https://randomuser.me/api/portraits/men/1.jpg', likes: 0 },
  { name: 'Alice Smith', comment: 'The daily goals feature is keeping me consistent, and the content is well-organized. Definitely recommend this app!"', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', likes: 0 },
  { name: 'Sarah Lee', comment: 'For practicing speaking, I find it very useful.', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', likes: 0},
  { name: 'Lucas', comment: '"I’ve tried a few language learning apps, but this one stands out with its interactive features and engaging quizzes!"', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', likes: 0},
  { name: 'Daniel', comment: '"I’m really enjoying the community here. It’s great to discuss and share tips with others learning the same language."', avatar: 'https://randomuser.me/api/portraits/men/7.jpg', likes: 0},
  { name: 'Mark Peterson', comment: 'Very good app! The design is sleek, and the lessons are easy to follow. Highly recommend it', avatar: 'https://randomuser.me/api/portraits/men/6.jpg', likes: 0 },
  { name: 'Emily Thompson', comment: 'Ive been using this app for a few weeks now, and I’m really impressed with how thorough the lessons are. The structure is perfect for beginners and advanced learners alike. The quizzes and exercises are well-designed to reinforce what you have learned. I also like how the app emphasizes real-world language usage rather than just vocabulary drills. The community feature is a great addition—getting feedback and sharing tips with others who are learning the same language has really kept me motivated. Overall, this app has everything you need to master a new language', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', likes: 0 },
];

function Discussion() {
  const [comments, setComments] = useState(userComments);
  const [newComment, setNewComment] = useState('');

  const handleLike = (index) => {
    const updatedComments = comments.map((comment, i) => {
      if (i === index) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  // const handleDislike = (index) => {
  //   const updatedComments = comments.map((comment, i) => {
  //     if (i === index) {
  //       return { ...comment, dislikes: comment.dislikes + 1 };
  //     }
  //     return comment;
  //   });
  //   setComments(updatedComments);
  // };

  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        { name: localStorage.getItem('username'), comment: newComment, avatar: '../../static/images/avatar.jpeg', likes: 0, dislikes: 0 },
      ]);
      setNewComment('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box
          sx={{
            background: 'linear-gradient(45deg, #2b2b2b, #1e1e1e)',
            padding: 4,
            borderRadius: 3,
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
            color: '#ffffff',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Discussion Forum
          </Typography>

          {comments.map((entry, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#2b2b2b',
                padding: 3,
                borderRadius: 3,
                marginBottom: 3,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Avatar src={entry.avatar} sx={{ marginRight: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {entry.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  {entry.comment}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => handleLike(index)} sx={{ color: '#ffffff' }}>
                  <ThumbUpAltIcon /> <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{entry.likes}</Typography>
                </IconButton>
                {/* <IconButton onClick={() => handleDislike(index)} sx={{ color: '#ffffff', marginLeft: 2 }}>
                  <ThumbDownAltIcon /> <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{entry.dislikes}</Typography>
                </IconButton> */}
                {entry.name === localStorage.getItem('username') && (
                  <IconButton onClick={() => handleDelete(index)} sx={{ color: '#ff5555', marginLeft: 2 }}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
          ))}

       <TextField
         variant="outlined"
         fullWidth
         placeholder="Leave a comment..."
         multiline
         rows={3}
         value={newComment}
         onChange={(e) => setNewComment(e.target.value)}
         sx={{
         backgroundColor: '#2b2b2b',
         borderRadius: 2,
         marginBottom: 3,
         input: { color: '#ffffff' }, // This ensures the input text is white
         '& .MuiOutlinedInput-root': {
         '& fieldset': {
        borderColor: '#3c3c3c',
         },
        '&:hover fieldset': {
         borderColor: '#007BFF',
        },
        '&.Mui-focused fieldset': {
         borderColor: '#007BFF',
      },
    },
  }}
  InputProps={{
    style: { color: '#ffffff' }, // This ensures the input text is white
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
            onClick={handleAddComment}
          >
            ADD COMMENT
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Discussion;
