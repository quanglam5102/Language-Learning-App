import React, { useState } from 'react';
import { Button, Container, Typography, Collapse, Box } from '@mui/material';

const Content = () => {
    const [showContents, setShowContents] = useState({
        content: false,
        content2: false,
        content3: false,
        content4: false,
        content5: false,
    });

    const handleToggleContent = (content) => {
        setShowContents((prevShowContents) => ({
            ...prevShowContents,
            [content]: !prevShowContents[content],
        }));
    };

    return (
        <Container
            maxWidth="md"
            style={{
                backgroundColor: '#2F2F2F',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '20px',
                marginTop: '50px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Language Lessons
            </Typography>
            {Object.keys(showContents).map((content, index) => (
                <Box key={index} mb={2}>
                    <Button
                        variant="contained"
                        color={showContents[content] ? 'secondary' : 'primary'}
                        onClick={() => handleToggleContent(content)}
                        style={{ width: '100%' }}
                    >
                        {showContents[content] ? `Close ${content}` : `Access ${content}`}
                    </Button>
                    <Collapse in={showContents[content]}>
                        <Box mt={2} p={2} style={{ backgroundColor: '#333333', borderRadius: '8px' }}>
                            <Typography component="div" variant="body1">
                                {content === 'content' && (
                                    <>
                                        <Typography component="div">
                                            Welcome to our Spanish language lesson! In this section, we will dive into various aspects of Spanish, including vocabulary, grammar, and cultural nuances. We will cover essential phrases, conjugation of verbs, and common expressions used in daily conversations. Enjoy learning and practicing Spanish with interactive exercises and quizzes.
                                        </Typography>
                                        <Typography component="div">
                                            Our lesson will include interactive elements to help you grasp the material effectively. Feel free to explore the content, take notes, and revisit the topics as needed. We encourage you to practice regularly and make the most out of this learning experience.
                                        </Typography>
                                    </>
                                )}
                                {content === 'content2' && (
                                    <>
                                        <Typography component="div">
                                            In this French lesson, you will learn about various expressions used in different contexts, including greetings, farewells, and polite expressions. We will also delve into French pronunciation and essential vocabulary to help you communicate effectively in French-speaking environments.
                                        </Typography>
                                        <Typography component="div">
                                            The content will be accompanied by exercises and examples to reinforce your understanding. Make sure to practice speaking and listening to enhance your proficiency in French. Bon courage!
                                        </Typography>
                                    </>
                                )}
                                {content === 'content3' && (
                                    <>
                                        <Typography component="div">
                                            Here, we focus on the basics of Japanese language learning. We will introduce you to Japanese characters, pronunciation, and basic grammar rules. This section aims to provide a solid foundation for further learning and practicing Japanese.
                                        </Typography>
                                        <Typography component="div">
                                            Engage with the interactive exercises and quizzes to test your knowledge and track your progress. Embrace the challenge and enjoy discovering the beauty of the Japanese language and culture.
                                        </Typography>
                                    </>
                                )}
                                {content === 'content4' && (
                                    <>
                                        <Typography component="div">
                                            Our Italian lesson covers essential phrases and expressions used in everyday conversations. We will explore Italian grammar, vocabulary, and cultural insights to enhance your communication skills in Italian-speaking contexts.
                                        </Typography>
                                        <Typography component="div">
                                            Practice with the provided exercises and interact with the content to improve your Italian proficiency. Remember, consistent practice is key to mastering any language. Buona fortuna!
                                        </Typography>
                                    </>
                                )}
                                {content === 'content5' && (
                                    <>
                                        <Typography component="div">
                                            This section offers an overview of German language fundamentals. We will cover basic grammar, vocabulary, and pronunciation tips to help you get started with learning German. Engage with the interactive content and practice regularly to build a strong foundation in German.
                                        </Typography>
                                        <Typography component="div">
                                            Utilize the exercises and quizzes to assess your understanding and track your progress. Viel Erfolg with your German language journey!
                                        </Typography>
                                    </>
                                )}
                            </Typography>
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </Container>
    );
};

export default Content;
