const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello there, ${name}`);

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

