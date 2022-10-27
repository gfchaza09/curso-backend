const Contenedor = require("./contenedor");

const products = new Contenedor("./db/productos.txt");

const test = async () => {
  // Test método getAll()
  let productsArr = await products.getAll();
  console.log(productsArr);
  // Test método save()
  const idNewProduct = await products.save({
    title: "Mochila",
    price: 567.89,
    thumbnail:
      "https://cdn0.iconfinder.com/data/icons/education-364/24/schoolbag-backpack-bag-school-education-learning-512.png",
  });
  console.log(idNewProduct);
  // Test método getById()
  const product = await products.getById(3);
  console.log(product);
  // Test método deleteById()
  await products.deleteById(2);
  productsArr = await products.getAll();
  console.log(productsArr);
  // Test método deleteAll()
  await products.deleteAll();
  productsArr = await products.getAll();
  console.log(productsArr);
};

test();
