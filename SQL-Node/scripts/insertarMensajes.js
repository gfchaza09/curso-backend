import knex from "knex";
import config from "../src/config.js";

const knexConnection = knex(config.sqlite3);

const mensajes = [
  {
    autor: "admin@mail.com",
    fyh: "24/11/2022 19:57:22",
    texto: "Bienvenido/a al canal de chat",
  },
];

knexConnection("mensajes")
  .insert(mensajes)
  .then(() => console.log("datos cargados"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knexConnection.destroy();
  });
