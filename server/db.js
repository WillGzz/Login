const Pool = require("pg").Pool;
// pool is used to establish a connection to the PostgreSQL server and create a pool of connections that can be reused by multiple clients.
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "qr",
  password: "password",
  port: 5432,
});
 //request, response

  // Signup function
  const signup = (request, response) => {
    const { username, password } = request.body;
  
    pool.query(
      "INSERT INTO CUSTOMER (username, password) VALUES ($1, $2) RETURNING *", [username, password],
      (error, results) => {
        if (error) {
          throw error();
        }
        // Send a response with a URL to redirect to
        response.json({ redirect: '/ReactPage' });
      }
    );
  };
 // Login function
const login = (request, response) => {
  const { username, password } = request.body;

  pool.query(
      "SELECT * FROM CUSTOMER WHERE username = $1 AND password = $2", [username, password],
      (error, results) => {
          if (error) {
              throw error;
          }

          if (results.rows.length > 0) {
              // User found, send a response with a URL to redirect to
              response.json({ success: true, redirect: '/ReactPage' });
          } else {
              // User not found, send an error message
              response.json({ success: false, message: 'Please enter the correct username and password.' });
          }
      }
  );
};

// Export the signup and login functions
module.exports = {
  signup,
  login
};
