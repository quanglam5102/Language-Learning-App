import React, { Component } from "react";
import { render } from "react-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Button from '@mui/material/Button';
import Home  from './Home';
import Login from './Login';
import Registration from './Registration';
import { BrowserRouter as Router, Routes, Route, Link, Redirect, } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
        <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
        </Routes>
    </Router>;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)