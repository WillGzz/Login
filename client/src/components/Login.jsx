import { useState } from "react";

function Login({ handleSubmit }) {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        handleSubmit({ name, Password });
        setName("");
        setPassword("");
    }

    return (

        <div className="login-container">
            <div className="form">

        <form onSubmit={submitForm}>
            <label htmlFor="linkName">UserName:</label>
        
            <input type="text" id="Name" name="linkName" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <br />
            <label For="Password">Password:</label>
           
            <input type="password" id="Password" name="Password" value={Password} onChange={(event) => setPassword(event.target.value)} />
            <br />
            <br />
            <input id="submit-button" type="submit" value="Confirm" />
        </form>
        </div>
        </div>
    )
}

export default Login;