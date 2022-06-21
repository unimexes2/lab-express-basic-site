const express = require("express");
const app = express();
const port = 8008;
app.use(express.static("public")); 

app.get("/", (req, res) => {
  res.status(200).send("Hello visitor!<br>nice to meet you"  
  );
});

app.get("/home", (req, res) => {
  res.send("Pagina de Home");
});

app.get("/casa", (req, res) => {
  res.send("Esta es mi casa");
});

app.get("/friends/:friendParam", (req, res) => {
  console.log(req.params);
  //res.send("My friends")
  if (req.params.friendParam === "Hola") {
    res.send("esto lo he escrito");
  } else if (req.params.friendParam === "Curro") {
    res.send("Información sobre Curro");
  } else {
    res.send("No tengo mas amigos");
  }
});

app.get("/speak/:languageParam", (req, res) => {
  if (req.params.languageParam === "pig") {
    res.send("The pig says 'Oink!'");
  } else if (req.params.languageParam === "cow") {
    res.send("The cow says 'Moo'");
  } else if (req.params.languageParam === "dog") {
    res.send("The dog says 'Woof Woof!'");
  } else {
    res.send("I dont have that lenguage'");
  }
});

//greet/hola/3

app.get("/greet/:greetWord/:timesGreet", (req, res) => {
  const { greetWord, timesGreet } = req.params;
  let fullMessage = greetWord.repeat(timesGreet);
  res.send(fullMessage);
});

app.get("/mi-pagina", (req, res) => {
  res.sendFile(__dirname + "/views/mi-pagina.html"); //ruta absoluta del elemento
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});