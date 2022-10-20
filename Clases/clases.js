class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const usuario1 = new Usuario(
  "Lionel",
  "Messi",
  [
    { nombre: "El señor de las moscas", autor: "William Golding" },
    { nombre: "Fundación", autor: "Isaac Asimov" },
  ],
  ["perro", "gato"]
);

console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
console.log(usuario1.getFullName());
usuario1.addMascota("bicho");
console.log(usuario1.countMascotas());
usuario1.addBook("El señor de los anillos", "J.R.R.Tolkien");
console.log(usuario1.getBookNames());
