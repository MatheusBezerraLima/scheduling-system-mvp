const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

const config = () => {
    return app;
}

module.exports = config;