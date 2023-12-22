import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitForm = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        if (name && Password !== ""){
            setName("");
            setPassword("");
            navigate('/ReactPage');
        }
    };

    return (
        <div className="login-container">
            <div className="form">
                <form onSubmit={submitForm}>
                    <label htmlFor="linkName">UserName:</label>
                    <input type="text" id="Name" name="linkName" required value={name} onChange={(event) => setName(event.target.value)} />
                    <br />
                    <br />
                    <label For="Password">Password:</label>
                    <input type="password" id="Password" name="Password" required value={Password} onChange={(event) => setPassword(event.target.value)} />
                    <br />
                    <br />
                    <input id="submit-button" type="submit" value="Confirm" />
                </form>
            </div>
        </div>
    )
}

export default Login;
