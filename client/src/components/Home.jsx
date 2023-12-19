import { Link } from "react-router-dom"

function Home() {



    
  return (
    <div>
      
      <h1>Login for a surprise</h1>
    
      <Link to={'/'}>
          <button>Signup</button>
          &nbsp;&nbsp;
        </Link>

        <Link to={''}>
          <button>
             Login 
          </button>
        </Link>
    </div>
  );
}

export default Home
