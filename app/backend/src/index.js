const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { dbConnection } = require('./database/config');

// create express server
const app = express();

// Data base
dbConnection();

// Cors
app.use(cors());

// Middleware that transforms req.body to json
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/boards', require('./routes/boards'));

app.listen( process.env.PORT, () => {
    console.log(`Server runing on port ${ process.env.PORT}`);
});