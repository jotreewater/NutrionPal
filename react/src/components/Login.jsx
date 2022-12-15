import React from "react";

function Login(){
    let loginInputEmail, loginInputPassword;

    function handleChange(input){

        switch(input.target.id){
            case'loginInputEmail':
                return loginInputEmail = input.target.value;
            case'loginInputPassword':
                return loginInputPassword = input.target.value;
        }
    }

    function handleClick(){
        // This is where we'll do our post request
        console.log("loginInputEmail: " + loginInputEmail);
        console.log("loginInputPassword: " + loginInputPassword);
    }

    return (<div className="container">
        <h1>Login</h1>
        <input placeholder="Email" onChange={handleChange} type="email" id="loginInputEmail" />
        <input placeholder="Password" onChange={handleChange} type="password" id="loginInputPassword" />
        <button onClick={handleClick}>Submit</button>
    </div>);
}

export default Login