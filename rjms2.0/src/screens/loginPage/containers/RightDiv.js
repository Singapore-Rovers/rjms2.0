import React, { useState} from 'react'
import './styles.css'

const RightDiv = (props) => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
            <div id="LoginContainer">
                <div id="LoginBox">
                    <div id="Header">
                        <img src={props.logo} id="ImageHeader"/>
                        <text>Rover Journey Portal</text>
                    </div>
                    <input placeholder="Username" id="UsernameField"/>
                    <input placeholder="Password" id="PasswordField" type="password"/>
                    <button style={{marginTop: 20}} onClick={() => console.log("HELLO WORLD")}>Login</button>
                    <button>Sign Up</button>
                    
                </div>
            </div>
    )
}

export default RightDiv