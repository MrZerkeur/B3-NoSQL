const express = require('express');
const app = express();
const connectDB = require('./mongodb.js');

const PORT = process.env.PORT || 3000;

connectDB();

app.get('/ping', (req, res) => {
    res.send('hi');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
