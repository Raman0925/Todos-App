const mysql = require('mysql');
require('dotenv').config();

// Create a MySQL connection
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: process.env.DBPORT ? parseInt(process.env.DBPORT) : 3306, // Default to 3306 if DBPORT is not defined
    database: 'todos',
});
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      return;
    }
  
    console.log('Connected to MySQL');
  
    // Perform MySQL queries using the 'connection' object
  
    connection.release(); // Release the connection back to the pool
  });

module.exports = pool;
