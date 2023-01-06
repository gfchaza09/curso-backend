import mongoose from "mongoose";
import config from "../config.js";

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

class ContenedorMongoDb {
  constructor(nombreColeccion, esquema) {
    this.coleccion = mongoose.model(nombreColeccion, esquema);
  }

  async list(id) {
    try {
      const product = await this.coleccion.findById(id);
      return product ? product : null;
    } catch (error) {
      console.log(error);
    }
  }

  async listAll() {
    try {
      const products = await this.coleccion.find({});
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async save(product) {
    try {
      let timestamp = Date.now();
      const newProduct = { ...product, timestamp };
      const result = await this.coleccion.create(newProduct);
      return result._id;
    } catch (error) {
      console.log(error);
    }
  }

  async update(prod, id) {
    try {
      const updatedProduct = await this.coleccion.findById(id);
      if (updatedProduct) {
        await this.coleccion.updateOne(
          { _id: ObjectId(id) },
          { ...prod, timestamp: Date.now() }
        );
        return updatedProduct;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const deletedProduct = await this.coleccion.findById(id);
      if (deletedProduct) {
        await this.coleccion.deleteOne({ _id: ObjectId(id) });
        return true;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    await this.coleccion.deleteMany({});
  }
}

export default ContenedorMongoDb;
