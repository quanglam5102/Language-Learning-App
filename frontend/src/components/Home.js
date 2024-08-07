import React from 'react';

import '../../static/css/home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Language Learner!</h1>
        <p>Start your journey to becoming fluent in multiple languages today.</p>
        <button className="App-button" onClick={() => alert('Get Started Clicked!')}>
          Get Started
        </button>
      </header>
    </div>
  );    
}

export default Home;  
