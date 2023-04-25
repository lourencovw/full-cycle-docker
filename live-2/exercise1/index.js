const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    response.send("PFA docker");
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});