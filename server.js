const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT || 8080);