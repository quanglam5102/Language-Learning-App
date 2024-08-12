import React, { Component } from "react";
import { render } from "react-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Button from "@mui/material/Button";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Navbar from "./Navbar";
import Content from "./Content";
import Quiz from "./Quiz";
import About from "./About";
import UserProfile from "./UserProfile"
import Discussion from "./Discussion";
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
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/logout" element={<About />} />
            <Route path="/Discussion" element={<Discussion />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
