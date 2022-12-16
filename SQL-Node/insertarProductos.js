import knex from "knex";
import config from "./config.js";

const knexConnection = knex(config.mariaDb);

const productos = [
  {
    title: "Escuadra",
    price: 1234,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    title: "Calculadora",
    price: 2345,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    title: "Reloj",
    price: 3456,
    thumbnail:
      "https://cdn4.iconfinder.com/data/icons/azullustre-mayosoft/AzulLustre_icons/256/Reloj_arena.png",
  },
];

knexConnection("productos")
  .insert(productos)
  .then(() => console.log("datos cargados"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knexConnection.destroy();
  });
