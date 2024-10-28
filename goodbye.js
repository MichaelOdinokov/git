const express = require('express');
const app = express();
const port = 3001;

app.get('/goodbye', (req, res) => {
    res.send('Goodbye!');
});

app.listen(port, () => {
    console.log(`Сервер прощания запущен на http://localhost:${port}`);
});

