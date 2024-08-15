
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../../static/css/login.css';
import { useAuth } from './AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/content';// Default to '/content' if no from state

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is invalid.');
      return;
    }

    setError('');
    const requestOptions = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          email: email,
          password: password,
      }),
  };
    fetch('/api/login', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if(data.username != null) {
          login();
          localStorage.setItem('email', data.email)
        }
        else {
          setError('Email or password is not valid. Try again.');
        }
      })
      .catch(() => setError('Something went wrong. Please try again.'));
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
