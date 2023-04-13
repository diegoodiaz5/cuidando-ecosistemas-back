const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const users = require('./Routes/Users')
const plants = require('./Routes/Plants')

app.use(express.json())
app.use(cors());
app.use('/', users, plants);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});