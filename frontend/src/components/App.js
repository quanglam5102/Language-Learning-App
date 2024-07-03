import React, { Component } from "react";
import { render } from "react-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Button from "@mui/material/Button";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Navbar from "./Navbar";
import Content from "./Content";
import About from "./About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/content" element={<Content />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
