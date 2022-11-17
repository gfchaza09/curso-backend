const express = require("express");
const handlebars = require("express-handlebars");

const ProductosApi = require("./api/productos.js");

const productosApi = new ProductosApi();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Set engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

//--------------------------------------------

app.post("/productos", (req, res) => {
  productosApi.guardar(req.body);
  res.redirect("/");
});

app.get("/productos", (req, res) => {
  res.render("productos", {
    hayProductos: productosApi.listarAll().length,
    productos: productosApi.listarAll(),
  });
});

//--------------------------------------------
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
