import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const submitForm = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        if (username && Password !== ""){
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: Password }),
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setUserName("");
                    setPassword("");
                    navigate('/ReactPage');
                } else {
                    console.error('Error:', data.message);
                    setErrorMessage(data.message);
                }
            } else {
                console.error('HTTP error! status:', response.status);
                // Handle HTTP errors here
            }
        }
    };
    

    return (
        <div className="login-container">
            <div className="form">
                <form onSubmit={submitForm}>
                    <label htmlFor="linkName">UserName:</label>
                    <input type="text" id="Name" name="linkName" required value={username} onChange={(event) => setUserName(event.target.value)} />
                    <br />
                    <br />
                    <label For="Password">Password:</label>
                    <input type="password" id="Password" name="Password" required value={Password} onChange={(event) => setPassword(event.target.value)} />
                    <br />
                    <br />
                    <input id="submit-button" type="submit" value="Confirm" />
                    {errorMessage && <p id="error-message">{errorMessage}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login;
