import React, { useState } from "react";

export default function Registration() {
 
    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "" || email === "" || password === ""){
           setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    const successMessage = () => {
       return (
           <div
               className="success"
               style={{
                   display: submitted ? "" : "none", 
               }}
            >
               <h1>User {name} successfully registered!!</h1>
            </div>
       );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
                >
                    Please enter all input
                </div>
        );
    };

    return(
        <div className="App">
        <div className="form">
            
            <div>
                <h1>Sign Up</h1>
            </div>
            
            {/* Calling method */}
            <div className= "messages">
                 {errorMessage()}
                 {successMessage()}
            </div>
            <form>
                {/*hi*/}
                
                <input
                    placeholder="Name"
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                    />
                    <input
                        placeholder="Email Address"
                        onChange={handleEmail}
                        className="input"
                        value={email}
                        type="email"
                    />
                    <input
                        placeholder="Password"
                        onChange={handlePassword}
                        className="input"
                        value={password}
                        type="password">
                    </input>
                    <br/>
                    <br/>
                    <button onClick={handleSubmit} className="btn" type="submit">
                        Signup
                    </button>  
                    <h2>Learning Language App</h2>            
            </form>
        </div>  
        </div>      
    );
}
