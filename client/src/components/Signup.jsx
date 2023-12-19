import { useState } from "react";

function Signup (){

    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        handleSubmit({ name, Password });
        setName("");
        setPassword("");
    }

    return (
        <div className="signup-container">
        <div>
        <form onSubmit={submitForm}>
            <label htmlFor="linkName">Name:</label>
        
            <input type="text" id="Name" name="linkName" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <br />
            <label For="Password">Password:</label>
           
            <input type="text" id="Password" name="Password" value={Password} onChange={(event) => setPassword(event.target.value)} />
            <br />
            <br />
            <input id="submit-button" type="submit" value="Submit" />
        </form>
        </div>
        </div>
    )
}

export default Signup