const express = require('express');

const app = express();

const port = 8082;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Project Support'
    })
});

app.listen(port, (req, res) => {
    console.log(`Server is live on por ${port}`);
});