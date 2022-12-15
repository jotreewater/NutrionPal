import React from "react";

function Register(){

    let registerInputName, registerInputEmail, registerInputPassword, registerInputConfirmPassword;

    function handleChange(input){

        switch(input.target.id){
            case'registerInputName':
                return registerInputName = input.target.value;
            case'registerInputEmail':
                return registerInputEmail = input.target.value;
            case'registerInputPassword':
                return registerInputPassword = input.target.value;
            case'registerInputConfirmPassword':
                return registerInputConfirmPassword = input.target.value;
        }
    }

    function handleClick(){
        // This is where we'll do our post request
        console.log("registerInputName: " + registerInputName);
        console.log("registerInputEmail: " + registerInputEmail);
        console.log("registerInputPassword: " + registerInputPassword);
        console.log("registerInputConfirmPassword: " + registerInputConfirmPassword);
    }

    return (<div className="container">
        <h1>Register</h1>
        <input placeholder="Name" type="text" onChange={handleChange} id="registerInputName" />
        <input placeholder="Email" onChange={handleChange} type="email" id="registerInputEmail" />
        <input placeholder="Password" onChange={handleChange} type="password" id="registerInputPassword" />
        <input placeholder="Confirm Password" onChange={handleChange} type="password" id="registerInputConfirmPassword" />
        <button onClick={handleClick}>Submit</button>
    </div>);
}

export default Register