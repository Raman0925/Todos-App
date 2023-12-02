// app.js
const express = require('express');
const dbpool = require('./db');
const cors = require('cors')
const app = express();

app.use(cors())
// GET all todos
app.get('/todos', async (req, res) => {
    try {
        const [rows] = await dbpool.query('SELECT * FROM todos');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// GET todos by userEmail
app.get('/todos/:userEmail', async (req, res) => {
    try {
        const {userEmail} = req.params;
        const [rows] = await dbpool.query('SELECT * FROM todos WHERE user_email = ?', [userEmail]);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
