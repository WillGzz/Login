import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ handleSubmit }) {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const submitForm = async (event) => {
        //    event.preventDefault(); //prevents the form from being submitted when the “Submit” button is clicked. This allows the form submission to be handled by the JavaScript code instead
            if (isMatch && isValid && name !== "")  {
                try {
                 //  await handleSubmit(name, password);
                    setName("");
                    setPassword("");
                    setNewPassword("");
        
                    navigate('/ReactPage');
                } catch (error) {
                    console.error('Error:', error);
                    // Handle any errors from handleSubmit here
                }
            } 
        };
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