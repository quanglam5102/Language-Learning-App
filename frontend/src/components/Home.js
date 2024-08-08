import React from 'react';
import { useNavigate } from 'react-router-dom'

import '../../static/css/home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Lingual Master!</h1>
        <p>Start your journey and become fluent in multiple languages today.</p>
        <button className="App-button" onClick={() => navigate('/content')}>
          Get Started
        </button>
      </header>
    </div>
  );    
}

export default Home;  
