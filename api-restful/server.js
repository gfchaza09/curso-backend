const express = require("express");
const { Router } = express;
const ProductosApi = require("./container/productos.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productosApi = new ProductosApi();

const productosRouter = new Router();

//rutas usando productosRouter
productosRouter.get("/", (req, res) => {
  let productos = productosApi.listarAll();
  res.json({ productos: productos });
});

productosRouter.get("/:id", (req, res) => {
  let { id } = req.params;
  let producto = productosApi.listar(id);
  if (producto) {
    res.json({ producto: producto });
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

productosRouter.post("/", (req, res) => {
  let productoNuevo = productosApi.guardar(req.body);
  res.send({ producto: productoNuevo });
});

productosRouter.put("/:id", (req, res) => {
  let { id } = req.params;
  let producto = productosApi.actualizar(req.body, id);
  if (producto) {
    res.send("Producto Modificado");
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

productosRouter.delete("/:id", (req, res) => {
  let { id } = req.params;
  let producto = productosApi.borrar(id);
  if (producto) {
    res.send("Producto Eliminado");
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

// servidor

app.use(express.static("public"));
app.use("/api/productos", productosRouter);

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
