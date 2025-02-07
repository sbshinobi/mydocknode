const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => console.log(`Server running on port ${PORT}`));
 