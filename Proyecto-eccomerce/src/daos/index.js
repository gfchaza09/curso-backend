let productosDao;
let carritoDao;

switch ("mongodb") {
  case "json":
    const { default: ProductosDaoArchivo } = await import(
      "./productos/ProductosDaoArchivo.js"
    );
    const { default: CarritoDaoArchivo } = await import(
      "./carrito/CarritoDaoArchivo.js"
    );

    productosDao = new ProductosDaoArchivo();
    carritoDao = new CarritoDaoArchivo();
    break;
  case "firebase":
    break;
  case "mongodb":
    const { default: ProductosDaoMongoDb } = await import(
      "./productos/ProductosDaoMongoDb.js"
    );
    const { default: CarritoDaoMongoDb } = await import(
      "./carrito/CarritoDaoMongoDb.js"
    );

    productosDao = new ProductosDaoMongoDb();
    carritoDao = new CarritoDaoMongoDb();
    break;
  case "memory":
    const { default: ProductosDaoMem } = await import(
      "./productos/ProductosDaoMem.js"
    );
    const { default: CarritoDaoMem } = await import(
      "./carrito/CarritoDaoMem.js"
    );

    productosDao = new ProductosDaoMem();
    carritoDao = new CarritoDaoMem();
    break;
  default:
    break;
}

export { productosDao, carritoDao };
