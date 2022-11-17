class ProductosApi {
  constructor() {
    this.productos = [];
    this.id = 0;
  }

  listar(id) {
    const producto = this.productos.find((prod) => prod.id === parseInt(id));
    return producto ? producto : null;
  }

  listarAll() {
    return this.productos;
  }

  guardar(prod) {
    const productoNuevo = { ...prod, id: ++this.id };
    this.productos.push(productoNuevo);
    return productoNuevo;
  }

  actualizar(prod, id) {
    const productoAModificar = this.productos.find(
      (producto) => producto.id === parseInt(id)
    );
    if (productoAModificar) {
      const productos = this.productos.filter(
        (producto) => producto.id !== parseInt(id)
      );
      this.productos = productos;
      this.productos.push({ ...prod, id: parseInt(id) });
      return productoAModificar;
    } else {
      return null;
    }
  }

  borrar(id) {
    const productoABorrar = this.productos.find(
      (producto) => producto.id === parseInt(id)
    );
    if (productoABorrar) {
      const productos = this.productos.filter(
        (prod) => prod.id !== parseInt(id)
      );
      this.productos = productos;
      return productoABorrar;
    } else {
      return null;
    }
  }
}

module.exports = ProductosApi;
