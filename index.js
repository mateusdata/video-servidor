const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());

const path = require('path');
app.use('/public', express.static(path.join(__dirname, '/public/images')));

app.get('/', (req, res) => {
    res.send('api rodando');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3001');
});
