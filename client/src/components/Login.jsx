import { useState } from "react";

function Form({ handleSubmit }) {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        handleSubmit({ name, Password });
        setName("");
        setPassword("");
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="linkName">Name:</label>
            <br />
            <input type="text" id="linkName" name="linkName" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <br />
            <label For="Password">Password</label>
            <br />
            <input type="text" id="Passwprd" name="Password" value={Password} onChange={(event) => setPassword(event.target.value)} />
            <br />
            <br />
            <input id="submit-button" type="submit" value="Submit" />
        </form>
    )
}

export default Form;