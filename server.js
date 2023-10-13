const express = require('express');
const app = express();
const users = require('./routes/users');

app.use('/api/users', users);

app.get("/api", (req, res) => {
    res.send({ "users": ["userOne", "userTwo"] })
  })
  
app.listen(5000, () => {
  console.log("Server started on port 5000")
})