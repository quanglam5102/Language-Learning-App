import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const learningPaths = {
  English: [
    { goal: "Learn basic vocabulary", progress: 0 },
    { goal: "Master essential grammar rules", progress: 0 },
    { goal: "Practice conversational skills", progress: 0 },
    { goal: "Read and understand simple texts", progress: 0 },
    { goal: "Improve pronunciation and fluency", progress: 0 },
  ],
  French: [
    { goal: "Understand French verb conjugations", progress: 0 },
    { goal: "Expand vocabulary related to daily life", progress: 0 },
    { goal: "Improve listening comprehension", progress: 0 },
    { goal: "Practice writing essays and emails", progress: 0 },
    { goal: "Engage in conversation with native speakers", progress: 0 },
  ],
  Spanish: [
    { goal: "Get familiar with Spanish pronunciation", progress: 0 },
    { goal: "Learn common phrases and expressions", progress: 0 },
    { goal: "Engage in regular speaking practice", progress: 0 },
    { goal: "Understand Spanish cultural references", progress: 0 },
    { goal: "Write and understand different text formats", progress: 0 },
  ],
  Japanese: [
    { goal: "Learn Hiragana and Katakana scripts", progress: 0 },
    { goal: "Understand basic Kanji characters", progress: 0 },
    { goal: "Practice Japanese sentence structure", progress: 0 },
    { goal: "Master essential vocabulary for daily use", progress: 0 },
    { goal: "Improve listening and speaking skills", progress: 0 },
  ],
  Chinese: [
    { goal: "Learn Pinyin and basic Chinese characters", progress: 0 },
    { goal: "Understand Chinese sentence patterns", progress: 0 },
    { goal: "Expand vocabulary for everyday communication", progress: 0 },
    { goal: "Practice reading and writing Chinese texts", progress: 0 },
    { goal: "Enhance listening and speaking abilities", progress: 0 },
  ],
};

function LearningPath() {
  const [paths, setPaths] = useState(learningPaths);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [newGoal, setNewGoal] = useState("");

  const handleAddGoal = () => {
    if (newGoal.trim() !== "") {
      setPaths({
        ...paths,
        [selectedLanguage]: [
          ...paths[selectedLanguage],
          { goal: newGoal, progress: 0 },
        ],
      });
      setNewGoal("");
    }
  };

  const handleProgressChange = (index, value) => {
    const numericValue = Number(value);
    // Clamp the value between 0 and 100
    const clampedValue = Math.max(0, Math.min(numericValue, 100));
    const updatedGoals = paths[selectedLanguage].map((goal, i) => {
      if (i === index) {
        return { ...goal, progress: clampedValue };
      }
      return goal;
    });
    setPaths({
      ...paths,
      [selectedLanguage]: updatedGoals,
    });
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = paths[selectedLanguage].filter((_, i) => i !== index);
    setPaths({
      ...paths,
      [selectedLanguage]: updatedGoals,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box
          sx={{
            background: "linear-gradient(45deg, #2b2b2b, #1e1e1e)",
            padding: 4,
            borderRadius: 3,
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
            color: "#ffffff",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Language Learning Paths
          </Typography>

          <Box sx={{ marginBottom: 3, textAlign: "center" }}>
            {Object.keys(learningPaths).map((lang) => (
              <Button
                key={lang}
                variant={selectedLanguage === lang ? "contained" : "outlined"}
                sx={{ margin: 1 }}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </Button>
            ))}
          </Box>

          {paths[selectedLanguage].map((entry, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#2b2b2b",
                padding: 3,
                borderRadius: 3,
                marginBottom: 3,
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {entry.goal}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#b0b0b0", marginRight: 1 }}
                  >
                    Progress:
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    type="number"
                    placeholder="0"
                    value={entry.progress === 0 ? "" : entry.progress}
                    onChange={(e) =>
                      handleProgressChange(index, e.target.value)
                    }
                    sx={{ width: 80 }}
                    InputProps={{
                      inputProps: { min: 0, max: 100 },
                      style: { color: "#00ff00" }, 
                    }}
                  />
                </Box>
              </Box>
              <IconButton
                onClick={() => handleDeleteGoal(index)}
                sx={{
                  color: "#ff6b6b",
                  marginLeft: 1,
                  padding: 1,
                  width: "auto",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <TextField
            variant="outlined"
            fullWidth
            placeholder="Add a new route..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            sx={{
              backgroundColor: "#2b2b2b",
              borderRadius: 2,
              marginBottom: 3,
              input: { color: "#ffffff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3c3c3c",
                },
                "&:hover fieldset": {
                  borderColor: "#007BFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#007BFF",
                },
              },
            }}
            InputProps={{
              style: { color: "#ffffff" },
            }}
          />

          <Button
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
            onClick={handleAddGoal}
          >
            ADD ROUTE
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LearningPath;
