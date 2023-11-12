const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();

const dbpool = require('./db')

// Define a route
app.get('/todos', async (req, res) => {
    try {
        // Your code for handling todo requests will go here
        const queryResult = await dbPool.query('SELECT * FROM todos');
        const todos = queryResult[0];
        res.json(todos);
        // For example, you might fetch todos from a MySQL database
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
