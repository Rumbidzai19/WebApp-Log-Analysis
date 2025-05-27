const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
const PORT = 5000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Configure logging
const logStream = fs.createWriteStream('webapp.log', { flags: 'a' });
app.use(morgan(':date[iso] - :method :url :status - :response-time ms', { stream: logStream }));

// Utility function for custom logging
const logMessage = (level, message) => {
    const timestamp = new Date().toISOString();
    const log = `${timestamp} - ${level.toUpperCase()} - ${message}\n`;
    fs.appendFileSync('webapp.log', log);
};

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password123') {
        logMessage('info', `Login successful for user: ${username}`);
        res.status(200).json({ message: 'Login successful' });
    } else {
        logMessage('warning', `Failed login attempt for user: ${username}`);
        res.status(401).json({ message: 'Login failed' });
    }
});

// Register endpoint
app.post('/register', (req, res) => {
    const { username, email } = req.body;

    logMessage('info', `New user registration: ${username}, Email: ${email}`);
    res.status(201).json({ message: 'Registration successful' });
});

// Password reset endpoint
app.post('/password_reset', (req, res) => {
    const { email } = req.body;

    logMessage('info', `Password reset requested for email: ${email}`);
    res.status(200).json({ message: 'Password reset link sent' });
});

// Homepage endpoint
app.get('/', (req, res) => {
    logMessage('info', 'Homepage accessed');
    res.send('Welcome to the web application!');
});

// Start the server
app.listen(PORT, () => {
    logMessage('info', `Server started on port ${PORT}`);
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
