const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("El servidor esta escuchando el puerto 3000");
});

app.get("/", function (req, res) {
  res.send("Ruta para get");
});

app.post("/", function (req, res) {
  res.send("Ruta para post");
});

app.put("/", function (req, res) {
  res.send("Ruta para put");
});

app.delete("/", function (req, res) {
  res.send("Ruta para delete");
});