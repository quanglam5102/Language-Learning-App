import React, { Component } from "react";
import { render } from "react-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Button from '@mui/material/Button';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Language Learning App</h1>
        </div>;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)