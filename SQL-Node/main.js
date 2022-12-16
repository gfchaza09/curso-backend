import express from "express";

import { Server as HttpServer } from "http";
import { Server as Socket } from "socket.io";

import ContenedorSQL from "./contenedores/ContenedorSQL.js";

import config from "./config.js";

//--------------------------------------------
// instancio servidor, socket y api

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

const productosApi = new ContenedorSQL(config.mariaDb, "productos");
const mensajesApi = new ContenedorSQL(config.sqlite3, "mensajes");

//--------------------------------------------
// configuro el socket

io.on("connection", async (socket) => {
  //Implementación

  socket.on("conection", async (data) => {
    await prodList();
    await chatList();
  });

  const prodList = async () => {
    let prod = await productosApi.listarAll();
    io.sockets.emit("productos", prod);
  };

  socket.on("update", async (data) => {
    await productosApi.guardar(data);
    await prodList();
  });

  const chatList = async () => {
    let msgs = await mensajesApi.listarAll();
    io.sockets.emit("mensajes", msgs);
  };

  socket.on("nuevoMensaje", async (data) => {
    await mensajesApi.guardar(data);
    await chatList();
  });
});

//--------------------------------------------
// agrego middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//--------------------------------------------
// inicio el servidor

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor http escuchando en el puerto ${connectedServer.address().port}`
  );
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);
