const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const users = require('./routes/users');

app.use('/api/users', users);
// app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'restaurante'
})

// app.get("/checkdbconnection", (req, res) => {
//   db.connect((err) => {
//     if (err) {
//       res.status(500).json({ status: "Error", message: "No se pudo conectar a la base de datos" });
//     } else {
//       res.status(200).json({ status: "Éxito", message: "Conexión a la base de datos establecida" });
//     }
//   });
// });

app.get("/api", (req, res) => {
    res.send({ "users": ["userOne", "userTwo"] })
})

app.post("/api/login", (req, res)=> {
  const { email, password } = req.body
  const values = [email, password]
  var connection = db
  connection.query("SELECT * FROM usuario WHERE email = ? AND password = ?", values, (err, result) => {
    if(err){
      console.log(err);
      res.status(500).send(err)
    }else{
      if(result.length > 0){
        res.status(200).send({
          "id": result[0].idusuario,
          "nombre": result[0].nombre,
          "apellidos": result[0].apellidos,
          "correo": result[0].email         
        })
      }else{
        res.status(400).send('Usuario no existe')
      }
    }
  })
})

// app.get('/users', (req, res)=> {
//   const sql = "SELECT * FROM usuario";
//   db.query(sql, (err, data)=> {
//     if(err) return res.json(err);
//     return res.json(data);
//   })
// })

app.listen(5000, () => {
  console.log("Server started on port 5000")
})