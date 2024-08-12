
import React, { useState } from 'react';


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
    // Add more questions here
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

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

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
