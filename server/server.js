// app.js
const express = require('express');
const dbpool = require('./db');

const app = express();

app.get('/todos', async (req, res) => {
    try {
        app.get('/todos/:userEmail', async (req, res) => {
            try {
                const userEmail = req.params.userEmail;
                const [rows] = await dbpool.query('SELECT * FROM todos WHERE user_email = ?', [userEmail]);
                res.json(rows);
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
        
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
