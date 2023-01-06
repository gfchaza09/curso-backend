import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

class CarritoDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super("carrito", {
      products: { type: [], required: true },
      timestamp: { type: Number, required: true },
    });
  }

  async guardar(carrito = { productos: [] }) {
    return super.guardar(carrito);
  }
}

export default CarritoDaoMongoDb;
