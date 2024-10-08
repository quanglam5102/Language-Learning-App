import React, { useState } from 'react';
import { Button, Container, Typography, Collapse, Box } from '@mui/material';

const Content = () => {
    const [showContents, setShowContents] = useState(
        Array(10).fill(false) // Initializes states for 2 days of lectures
    );

    const handleToggleContent = (index) => {
        setShowContents((prevShowContents) =>
            prevShowContents.map((content, i) => (i === index ? !content : content))
        );
    };

    // Placeholder data for 2 days of lectures. Replace 'videoSrc' with real IDs that are embeddable.
    const lectureData = [
        {
            day: 1,
            description: `
Welcome to Day 1 of your English learning journey! Today, we will lay the foundation for your English skills by covering essential greetings, introductions, and basic phrases that are crucial for everyday interactions.

**Objectives:**
- Learn basic greetings and farewells.
- Practice introducing yourself and others.
- Understand and use common polite expressions.

**Content:**
- **Greetings and Farewells:**
  - Greetings: “Hello,” “Hi,” “Good morning,” “Good afternoon,” “Good evening.”
  - Farewells: “Goodbye,” “See you later,” “Take care,” “Have a nice day.”

- **Introducing Yourself:**
  - Phrases: “My name is [Your Name],” “I am [Your Name],” “I am from [Your Country/City].”
  - Questions: “What is your name?” “Where are you from?”

- **Polite Expressions:**
  - Thanking: “Thank you,” “Thanks a lot,” “I appreciate it.”
  - Apologizing: “Sorry,” “I apologize,” “Excuse me.”

**Practice Activities:**
- Role-play scenarios where you greet someone, introduce yourself, and exchange polite phrases.
- Practice writing a short paragraph introducing yourself and your country.

            `,
            introText: 'Day 1: Introduction to Basic English',
            videoSrc: 'https://www.youtube.com/embed/1m4NDlOAzyg?si=E-GiV_ABT7y3OInY',
        },
        {
            day: 2,
            description: `
Today’s lecture dives deeper into advanced vocabulary and common expressions used in everyday conversations.

**Objectives:**
- Expand your vocabulary with advanced words.
- Learn how to use these words in various contexts.

**Content:**
- **Advanced Vocabulary:**
  - Explore new words and their meanings.
  - Practice using them in sentences.

- **Common Expressions:**
  - Learn idiomatic expressions and phrases.
  - Practice incorporating them into daily conversations.

**Practice Activities:**
- Write sentences using new vocabulary.
- Use idiomatic expressions in conversation practice.

            `,
            introText: 'Day 2: Expanding Your Vocabulary',
            videoSrc: 'https://www.youtube.com/embed/topBLaz4zgk?si=y1tJ2M4YegFlywJK',
        },
        {
            day: 3,
            description: `
Welcome to Day 3 of your English learning journey! Today, we focus on expanding your English vocabulary with common words and phrases used in various contexts. A rich vocabulary will help you express yourself more clearly and confidently.

**Objectives:**
- Learn new vocabulary related to everyday activities.
- Practice using new words in sentences.
- Understand common expressions in different scenarios.

**Content:**
- **Everyday Activities:**
    - Vocabulary: “Eat,” “Drink,” “Go,” “Come,” “Buy,” “Sell.”
    - Phrases: “I want to eat,” “Let’s go shopping,” “I need to buy groceries.”

- **Common Expressions:**
    - “How are you today?” “I’m doing well, thank you.”
    - “Can you help me with this?” “Of course, what do you need?”

**Practice Activities:**
- Write sentences using the new vocabulary words.
- Create a dialogue using the common expressions learned today.
            `,
            introText: "Day 3: Building Vocabulary",
            videoSrc: "https://www.youtube.com/embed/SoUZ3wovZAs?si=GzPvwWnY2oSsgrVX" // Replace with your video link
        },
        {
            day: 4,
            description: `
    Welcome to Day 4 of your English learning journey! Today, we will cover how to talk about time and dates, which is essential for scheduling and planning.
    
    **Objectives:**
    - Learn how to tell the time and discuss dates.
    - Practice asking and answering questions about time and dates.
    
    **Content:**
    - **Telling the Time:**
      - Phrases: “What time is it?” “It’s 3 o’clock,” “It’s quarter past five.”
      - Expressions: “I have an appointment at 10 AM,” “The meeting is at noon.”
    
    - **Discussing Dates:**
      - Phrases: “What’s the date today?” “Today is September 15th,” “My birthday is on March 5th.”
    
    **Practice Activities:**
    - Write about your daily schedule using time-related vocabulary.
    - Practice asking and answering questions about time and dates with a partner.
            `,
            introText: "Day 4: Understanding Time and Dates",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_4" // Replace with your video link
        },
        {
            day: 5,
            description: `
    Welcome to Day 5 of your English learning journey! Today, we practice engaging in simple conversations that are commonly used in everyday situations.
    
    **Objectives:**
    - Practice initiating and maintaining simple conversations.
    - Use common phrases and questions to keep a conversation going.
    
    **Content:**
    - **Starting a Conversation:**
      - Phrases: “How are you?” “What do you do for work?” “Do you have any hobbies?”
    
    - **Maintaining a Conversation:**
      - Expressions: “That’s interesting!” “Tell me more about that,” “How long have you been doing that?”
    
    **Practice Activities:**
    - Role-play a conversation with a partner using the phrases learned.
    - Write a short dialogue based on a typical daily conversation.
            `,
            introText: "Day 5: Engaging in Simple Conversations",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_5" // Replace with your video link
        },
        {
            day: 6,
            description: `
    Welcome to Day 6 of your English learning journey! Today, we’ll focus on mastering common questions and answers that are essential for effective communication.
    
    **Objectives:**
    - Learn how to ask and answer common questions.
    - Practice forming questions and providing responses.
    
    **Content:**
    - **Common Questions:**
      - “What is your favorite color?” “Where do you live?” “How old are you?”
    
    - **Providing Answers:**
      - “My favorite color is blue,” “I live in New York,” “I am 25 years old.”
    
    **Practice Activities:**
    - Write and answer common questions in a conversation format.
    - Practice asking and answering questions with a classmate or friend.
            `,
            introText: "Day 6: Mastering Common Questions and Answers",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_6" // Replace with your video link
        },
        {
            day: 7,
            description: `
    Welcome to Day 7 of your English learning journey! Today, we explore vocabulary and phrases related to food and dining, which will help you in restaurants and social gatherings.
    
    **Objectives:**
    - Learn vocabulary related to food and dining.
    - Practice using dining-related phrases in conversations.
    
    **Content:**
    - **Food Vocabulary:**
      - Vocabulary: “Breakfast,” “Lunch,” “Dinner,” “Snack,” “Restaurant,” “Menu.”
      - Phrases: “I’d like to order,” “Can I see the menu?” “The food was delicious.”
    
    - **Dining Phrases:**
      - “How many people are in your party?” “We have a reservation.” “Could we have the bill, please?”
    
    **Practice Activities:**
    - Write a review of a restaurant experience using new vocabulary.
    - Role-play a dining scenario with a partner.
            `,
            introText: "Day 7: Exploring Food and Dining",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_7" // Replace with your video link
        },
        {
            day: 8,
            description: `
    Welcome to Day 8 of your English learning journey! Today, we focus on expressing likes and dislikes, which is useful for sharing your preferences and opinions.
    
    **Objectives:**
    - Learn how to express likes and dislikes.
    - Practice using phrases to discuss preferences.
    
    **Content:**
    - **Expressing Likes:**
      - Phrases: “I like,” “I love,” “I enjoy,” “My favorite is.”
      - Examples: “I like pizza,” “I love traveling,” “I enjoy reading books.”
    
    - **Expressing Dislikes:**
      - Phrases: “I don’t like,” “I dislike,” “I’m not a fan of.”
      - Examples: “I don’t like loud music,” “I dislike waiting in line.”
    
    **Practice Activities:**
    - Write sentences about your likes and dislikes.
    - Create a dialogue discussing preferences with a partner.
            `,
            introText: "Day 8: Expressing Likes and Dislikes",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_8" // Replace with your video link
        },
        {
            day: 9,
            description: `
    Welcome to Day 9 of your English learning journey! Today, we’ll cover vocabulary and phrases related to shopping, which will be useful when navigating stores and markets.
    
    **Objectives:**
    - Learn vocabulary related to shopping.
    - Practice using shopping-related phrases in conversations.
    
    **Content:**
    - **Shopping Vocabulary:**
      - Vocabulary: “Price,” “Discount,” “Receipt,” “Size,” “Customer service.”
      - Phrases: “How much does this cost?” “Do you have this in size medium?” “Can I get a receipt, please?”
    
    - **Shopping Phrases:**
      - “I’m just browsing,” “I’m looking for a gift,” “I’d like to return this item.”
    
    **Practice Activities:**
    - Write a short dialogue based on a shopping experience.
    - Role-play a shopping scenario with a partner.
            `,
            introText: "Day 9: Navigating Shopping",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_9" // Replace with your video link
        },
        {
            day: 10,
            description: `
    Welcome to Day 10 of your English learning journey! Today, we will focus on travel-related vocabulary and phrases that will help you in various travel situations.
    
    **Objectives:**
    - Learn vocabulary related to travel and transportation.
    - Practice using travel-related phrases in conversations.
    
    **Content:**
    - **Travel Vocabulary:**
      - Vocabulary: “Airport,” “Flight,” “Hotel,” “Reservation,” “Passport.”
      - Phrases: “Where is the nearest airport?” “I have a reservation at this hotel,” “Can you show me the way to the station?”
    
    - **Travel Phrases:**
      - “I need a taxi,” “How long is the flight?” “What time is my departure?”
    
    **Practice Activities:**
    - Write about your last travel experience using new vocabulary.
    - Role-play a travel scenario with a partner.
            `,
            introText: "Day 10: Travel Vocabulary and Phrases",
            videoSrc: "https://www.youtube.com/embed/VIDEO_ID_DAY_10" // Replace with your video link
        },
    ];

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
                30 Days of English Lessons
            </Typography>

            {lectureData.map((lecture, index) => (
                <Box key={index} mb={2}>
                    <Button
                        variant="contained"
                        color={showContents[index] ? 'secondary' : 'primary'}
                        onClick={() => handleToggleContent(index)}
                        style={{ width: '100%' }}
                    >
                        {showContents[index] ? `Close Lecture Day ${lecture.day}` : `Lecture Day ${lecture.day}`}
                    </Button>
                    <Collapse in={showContents[index]}>
                        <Box mt={2} p={2} style={{ backgroundColor: '#333333', borderRadius: '8px' }}>
                            <Typography
                                component="div"
                                variant="h6"
                                style={{ fontWeight: 'bold' }}
                            >
                                {lecture.introText}
                            </Typography>

                            <Typography
                                component="div"
                                variant="body1"
                                style={{ whiteSpace: 'pre-line', marginTop: '0px' }}
                            >
                                {lecture.description}
                            </Typography>

                            <Box
                                component="iframe"
                                width="100%"
                                height="370px" 
                                src={lecture.videoSrc} // Use the provided video embed link
                                title={`Lecture Day ${lecture.day}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{ borderRadius: '8px', marginTop: '10px' }}
                            />
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </Container>
    );
};

export default Content;
