import express from "express";
import cors from "cors";
const { Router } = express;

import {
  productosDao as productosApi,
  carritoDao as carritoApi,
} from "./daos/index.js";

//------------------------------------------------------------------------
// instancio servidor

const app = express();

//--------------------------------------------
// permisos de administrador

const crearErrorNoEsAdmin = (ruta, metodo) => {
  const error = {
    error: -1,
  };
  if (ruta && metodo) {
    error.descripcion = `ruta '${ruta}' método '${metodo}' no autorizado`;
  } else {
    error.descripcion = `No autroizado`;
  }
  return error;
};

const esAdmin = true;

const soloAdmin = (req, res, next) => {
  if (!esAdmin) {
    res.json(crearErrorNoEsAdmin(req.url, req.method));
  } else {
    next();
  }
};

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router();

productosRouter.get("/", async (req, res) => {
  const productos = await productosApi.listAll();
  res.json(productos);
});

productosRouter.get("/:id", async (req, res) => {
  let { id } = req.params;
  const producto = await productosApi.list(id);
  if (producto) {
    res.json(producto);
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

productosRouter.post("/", soloAdmin, async (req, res) => {
  let idProductoNuevo = await productosApi.save(req.body);
  res.send({ productoNuevo: idProductoNuevo });
});

productosRouter.put("/:id", soloAdmin, async (req, res) => {
  let { id } = req.params;
  let producto = await productosApi.update(req.body, id);
  if (producto) {
    res.send("Producto Modificado");
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

productosRouter.delete("/:id", soloAdmin, async (req, res) => {
  let { id } = req.params;
  let producto = await productosApi.delete(id);
  if (producto) {
    res.send("Producto Eliminado");
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

//--------------------------------------------
// configuro router de carritos

const carritoRouter = new Router();

carritoRouter.post("/", async (req, res) => {
  let idCarritoNuevo = await carritoApi.save();
  res.send({ idCarrito: idCarritoNuevo });
});

carritoRouter.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let carrito = await carritoApi.delete(id);
  if (carrito) {
    res.send("Carrito Eliminado");
  } else {
    res.json({ error: "carrito no encontrado" });
  }
});

//--------------------------------------------------
// router de productos en carrito

carritoRouter.get("/:id/productos", async (req, res) => {
  let { id } = req.params;
  const carritoProductos = await carritoApi.list(id);
  if (carritoProductos) {
    res.json(carritoProductos);
  } else {
    res.json({ error: "carrito no encontrado" });
  }
});

carritoRouter.post("/:id/productos", async (req, res) => {
  let { id } = req.params;
  let carritoProductos = await carritoApi.update(req.body, id);
  if (carritoProductos) {
    res.send("Carrito Modificado");
  } else {
    res.json({ error: "carrito no encontrado" });
  }
});

carritoRouter.delete("/:id/productos/:id_prod", async (req, res) => {
  let { id, id_prod } = req.params;
  let carrito = await carritoApi.deleteProductCart(id, id_prod);
  if (carrito) {
    res.send("Producto Eliminado");
  } else {
    res.json({ error: "producto no encontrado" });
  }
});

//--------------------------------------------
// configuro el servidor

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productosRouter);
app.use("/api/carrito", carritoRouter);

app.use((req, res, next) => {
  res.status(404).send({
    error: "-2",
    description: `ruta '${req.url}' método '${req.method}' no implementado`,
  });
});

export default app;
