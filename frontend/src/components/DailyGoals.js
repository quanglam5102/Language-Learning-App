import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  List,
  ListItem,
  Checkbox,
  LinearProgress
} from "@mui/material";

const DailyGoals = () => {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('goals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });
  const [inputValue, setInputValue] = useState("");

  const addGoal = () => {
    if (inputValue.trim() !== "") {
      setGoals([...goals, { text: inputValue, completed: false }]);
      setInputValue(""); // Clear the text field after adding the goal
    }
  };

  const toggleGoalCompletion = (index) => {
    setGoals(goals.map((goal, i) =>
      i === index ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  // Calculate progress
  const completedGoals = goals.filter(goal => goal.completed).length;
  const totalGoals = goals.length;
  const progress = useMemo(() => (totalGoals === 0 ? 0 : (completedGoals / totalGoals) * 100), [completedGoals, totalGoals]);

  // Clear all goals
  const clearGoals = () => {
    setGoals([]);
  };

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    const updateProgress = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: localStorage.getItem('email'),
          progress: Math.round(progress),
      }),
      };
  
      try {
        const response = await fetch('/api/update-progress', requestOptions);
        const data = await response.json();
        console.log('Progress updated:', data);
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    };
  
    updateProgress();
  }, [progress]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          padding: 3,
          borderRadius: 3,
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#ffffff", fontWeight: "bold", textAlign: "center" }}
        >
          Daily Goals
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ color: "#ffffff", marginBottom: 1 }}>
            Progress Tracking
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 10,
              borderRadius: 2,
              backgroundColor: "#2b2b2b",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#007BFF",
              },
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", textAlign: "center", marginTop: 1 }}
          >
            {`${completedGoals} / ${totalGoals} Goals Completed (${Math.round(progress)}%)`}
          </Typography>
        </Box>

        {/* List of Goals */}
        <List>
          {goals.map((goal, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: "#2b2b2b",
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={goal.completed}
                onChange={() => toggleGoalCompletion(index)}
                sx={{ color: "white" }} // Customize the checkbox color if needed
              />
              <Typography
                variant="body1"
                sx={{
                  textDecoration: goal.completed ? "line-through" : "none",
                  color: "white", // Adjust the text color
                  marginLeft: 1, // Space between checkbox and text
                }}
              >
                {goal.text}
              </Typography>
            </ListItem>
          ))}
        </List>

        {/* Add Goal */}
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="outlined"
          fullWidth
          placeholder="Enter your goal..."
          multiline
          rows={2}
          sx={{
            backgroundColor: "#2b2b2b",
            borderRadius: 2,
            marginBottom: 3,
            input: { color: "#ffffff" },
          }}
          InputProps={{
            style: { color: "#ffffff" },
          }}
        />
        <Button
          onClick={addGoal}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#007BFF",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
            borderRadius: 2,
            paddingY: 1.5,
            fontWeight: "bold",
          }}
        >
          ADD GOAL
        </Button>
        <Button
          onClick={clearGoals}
          variant="outlined"
          fullWidth
          sx={{
            borderColor: "#007BFF",
            color: "#007BFF",
            "&:hover": {
              borderColor: "#0056b3",
              color: "#0056b3",
            },
            borderRadius: 2,
            paddingY: 1.5,
            fontWeight: "bold",
            marginTop: '15px',
          }}
        >
          Clear ALL GOALS
        </Button>
      </Box>
    </Container>
  );
};

export default DailyGoals;
