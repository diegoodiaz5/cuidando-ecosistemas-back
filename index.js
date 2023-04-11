const express = require('express');
const app = express();
const PORT = 3001;

const users = require('./Routes/Users')

app.use(express.json())
app.use('/', users);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});