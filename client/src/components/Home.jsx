import { Link } from "react-router-dom"

function Home() {



    
  return (
    <div className="container">
    <div>
        <p>Demo Account:
       <br /> JohnDoe <br/> JohnDoe123@ 
        </p>
        <h1>Login For A Surprise!</h1>
    
      <Link to={'Signup'}>
          <button className="signup-button">Signup</button>
          &nbsp;&nbsp;
        </Link>

        <Link to={'Login'}>
          <button className="login-button">
             Login 
          </button>
        </Link>
    </div>
    </div>
  );
}

export default Home
