import { useState } from "react";
import Information from "../assets/Information.png";

function Signup() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isMatch, setIsMatch] = useState(false);

    const validatePassword = (password) => { 
        const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/; 
        return regex.test(password); //built-in JavaScript method that tests for a match in a string.
    };
    /*
    Regular expressions are used for pattern matching and searching in strings
 ^: This asserts the start of a line.
(?=.*[A-Z]): assert that at some point in the string, there is an uppercase letter.
(?=.*[0-9]): assert that at some point in the string, there is a digit.
(?=.*[!@#$%^&*]):assert that at some point in the string, there is one of the specified symbols.
[a-zA-Z0-9!@#$%^&*]{8,}: This matches any string of at least 8 characters long that consists of the characters in the brackets (lowercase letters, uppercase letters, digits, and symbols).
$: This asserts the end of a line.
 */
     
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsValid(validatePassword(event.target.value));
        setIsMatch(event.target.value === newPassword && event.target.value !== ""); //the checkmark should only show when the passward match the new password and the input box is not empty
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
        setIsMatch(event.target.value === password && event.target.value !== "");
        //if the value of the new password match the password variable and the input box for the new password is not empty we have a match 
    };

    const submitForm = (event) => {
        event.preventDefault();
        if (isMatch && isValid) {
            handleSubmit({ name, password });
            setName("");
            setPassword("");
            setNewPassword("");
            
        } else {
            alert("Passwords do not match");
        }
    };
/*
Demo Account:

JohnDoe
JohnDoe123@

*/
    return (
        <div className="signup-container">
           
            <div>
                <form onSubmit={submitForm}>
                    
                    <label htmlFor="Name">UserName:</label>
                    <input type="text" id="Name" name="linkName" required value={name} onChange={(event) => setName(event.target.value)}  />
                    <br />
                    <label id="ps" htmlFor="Password">Password:</label>
                    <input type="password" id="password" required name="Password" value={password} onChange={handlePasswordChange} title="Must be at least 8 characters and contain a capital letter, number, and symbol."/>
                    {isValid && <span id="password-checkmark">✔</span>}
                    <br />
                    <label id="retype" htmlFor="retype">Retype Password:</label>
                    <input type="password" id="Password" required name="Password" value={newPassword} onChange={handleNewPasswordChange} title="Passwords must match" />
                    {isMatch && <span>✔</span>}
                    <br />
                    <br />
                    <input id="submit-button" type="submit" value="Confirm" />
                </form>
            </div>
        </div>
    );
}

export default Signup;
