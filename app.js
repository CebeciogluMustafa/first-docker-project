const express = require('express');
const app = express();
const path = require('path');
const port = 5858;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.listen(port, () => {
    console.log(`Started at http://localhost:${port}`);
});