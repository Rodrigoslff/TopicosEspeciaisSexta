const { request, response } = require("express");
const express = require("express");
const app  = express();

console.clear();
app.get("/", (request, response) => {
    response.send("Olá");
});

app.listen(3000, function(){
    console.log("O servidor está rodando...");
});

