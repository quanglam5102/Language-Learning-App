import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is logged in on initial load
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        // Here you would typically verify the token with the backend
        localStorage.setItem('authToken', token); // Store token in localStorage
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
