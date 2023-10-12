const express = require('express');
const app = express();
const port = process.env.PORT || 5000; //Line 3

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });
  
app.listen(port, () =>
  console.log(`Servidor escuchando en el puerto: ${port}`));