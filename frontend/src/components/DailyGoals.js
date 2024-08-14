
import React, { useState } from 'react';
// import '../../static/css/DailyGoals.css';

const DailyGoals = () => {
    const [goals, setGoals] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addGoal = () => {
        if (inputValue.trim() !== '') {
            setGoals([...goals, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    return (
        <div className="container">
            <h1>Daily Goals</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your goal"
            />
            <button onClick={addGoal}>Add Goal</button>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => {
                                const newGoals = [...goals];
                                if (newGoals[index].completed) {
                                    newGoals.splice(index, 1);
                                } else {
                                    newGoals[index].completed = !newGoals[index].completed;
                                }
                                setGoals(newGoals);
                            }}
                        />
                        <span style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
                            {goal.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DailyGoals;

