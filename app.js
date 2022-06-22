const express = require("express");
const app = express();
const port = 8080;
app.use(express.static("public")); 


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html"); //ruta absoluta del elemento
});


app.get("/photo", (req, res) => {
  console.log("blin");

  res.sendFile(__dirname + "/views/photo.html");
});

app.get("/works", (req, res) => {
  
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html"); 
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});