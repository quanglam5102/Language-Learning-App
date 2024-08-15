import React, { useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Updated import

const questions = [
    {
        questionText: 'What is the Spanish word for "apple"?',
        answerOptions: [
            { answerText: 'Manzana', isCorrect: true },
            { answerText: 'Banana', isCorrect: false },
            { answerText: 'Naranja', isCorrect: false },
            { answerText: 'Uva', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following means "thank you" in French?',
        answerOptions: [
            { answerText: 'Merci', isCorrect: true },
            { answerText: 'Bonjour', isCorrect: false },
            { answerText: 'Au revoir', isCorrect: false },
            { answerText: 'Pardon', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the capital of Japan?',
        answerOptions: [
            { answerText: 'Kyoto', isCorrect: false },
            { answerText: 'Osaka', isCorrect: false },
            { answerText: 'Tokyo', isCorrect: true },
            { answerText: 'Nagoya', isCorrect: false },
        ],
    },
    {
        questionText: 'Which planet is known as the Red Planet?',
        answerOptions: [
            { answerText: 'Earth', isCorrect: false },
            { answerText: 'Mars', isCorrect: true },
            { answerText: 'Jupiter', isCorrect: false },
            { answerText: 'Saturn', isCorrect: false },
        ],
    },
    // Add more questions as needed
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const navigate = useNavigate(); // Updated hook

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleGoHome = () => {
        navigate('/'); // Updated navigation function
    };

    return (
        <Container
            maxWidth="sm"
            style={{
                backgroundColor: '#2F2F2F',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '20px',
                marginTop: '50px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            }}
        >
            {showScore ? (
                <Box textAlign="center">
                    <Typography variant="h4" gutterBottom>
                        You scored {score} out of {questions.length}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGoHome}
                        style={{ backgroundColor: '#0077B6', marginTop: '20px' }}
                    >
                        Go to Home
                    </Button>
                </Box>
            ) : (
                <>
                    <Typography variant="h6" gutterBottom>
                        Question {currentQuestion + 1}/{questions.length}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {questions[currentQuestion].questionText}
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                style={{
                                    margin: '10px 0',
                                    backgroundColor: '#333333',
                                    color: '#FFFFFF',
                                    borderColor: '#0077B6',
                                    width: '100%',
                                }}
                            >
                                {answerOption.answerText}
                            </Button>
                        ))}
                    </Box>
                </>
            )}
        </Container>
    );
};

export default Quiz;
