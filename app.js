const express = require('express');
const app = express();

const PORT = 3000;

// Serve static files (like CSS)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Asad's World</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>🌟 Welcome to My Beautiful Webpage! 🌟</h1>
                <p>Hello, This is <strong>Asad Ali</strong>. You're visiting a page built with 💙 and Express.js!</p>
                <a href="https://github.com/asadali2004" class="btn">Visit My GitHub</a>
            </div>
        </body>
        </html>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

