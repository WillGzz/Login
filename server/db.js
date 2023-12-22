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
      "INSERT INTO customer (username, password) VALUES ($1, $2) RETURNING *", [username, password],
      (error, results) => {
        if (error) {
          throw error;
        }
        // Send a response with a URL to redirect to
        response.json({ redirect: '/ReactPage' });
      }
    );
  };
  

// Export the signup function
module.exports = {
  signup

};
