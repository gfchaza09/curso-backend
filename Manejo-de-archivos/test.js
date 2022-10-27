const Contenedor = require("./contenedor");

const products = new Contenedor("./db/productos.txt");

const test = async () => {
  const productsArr = await products.getAll();
  console.log(productsArr);
  //   const idNewProduct = await products.save({
  //     title: "Mochila",
  //     price: 567.89,
  //     thumbnail:
  //       "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-school-256.png",
  //   });
  //   console.log(idNewProduct);
};

test();
