const express = require('express');
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('This is what you came for');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
