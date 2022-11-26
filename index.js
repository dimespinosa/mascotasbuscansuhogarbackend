console.log("hola mundo");
console.log("Cargando configuracion...");
//Importar las dependencias
var bodyParser = require("body-parser");
//let cors = require("cors");
//let session = require("express-session");
const express = require("express");

//Cargar configuracion app WEB
//const PORT = process.env.PORT || 3500;

const appConfig = require("./config");

console.log("Inicializar la Aplicacion WEB...");
require("./db/dbInitializer");
//Inicializar una APLICACION WEB
const app = express();

// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION

console.log("Configurando Routers...");
//Configuracion de ROUTERS
//const userRouter = require("./routes/routerUser");
const userRouter = require("./routes/routerMascota");

app.use(bodyParser.json());

//Configurar Routers en la APP
//app.use("/api/usuarios", userRouter);
app.use("/api/mascotas", userRouter);

app.get(
    "/",

    function (req, res) {
        res.send("Hello World!");
    }
);

app.use(
    "/app",

    express.static("front")
);
app.use("/static", express.static("front/static"));

console.log("Iniciando Servidor");

let server = app.listen(
    appConfig.PORT,

    function () {
        console.log(`La aplicacion WEB esta escuchando en el PUERTO: ` +  appConfig.PORT);
    }
);

//AXIOS -> permite hacer peticiones HTTP