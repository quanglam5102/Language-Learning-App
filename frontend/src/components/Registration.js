import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../static/css/registration.css';
import { useAuth } from "./AuthProvider";

const Registration = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const validate = () => {
        const errors = {};
        if (!formData.username) errors.username = 'Username is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.phoneNumber) {
            errors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = 'The Phone number is invalid';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const { confirmPassword, ...dataToSubmit } = formData;
            const requestOptions = {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    username: dataToSubmit.username,
                    email: dataToSubmit.email,
                    password: dataToSubmit.password,
                    phone: dataToSubmit.phoneNumber,
                }),
            };
            fetch('/api/create-user', requestOptions)
                .then((response) => response.json())
                .then((data) => {logout(); navigate('/login');})
                .catch((error) => console.log('Error registering new user', error))
        }
    };

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.username && <p style={styles.error}>{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.password && <p style={styles.error}>{errors.password}</p>}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

const styles = {
    input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
    },
    error: {
        color: 'red',
        fontSize: '12px',
    }
};

export default Registration;
