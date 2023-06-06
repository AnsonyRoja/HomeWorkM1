class Persona {
  constructor(name, surname) {
    (this.name = name), (this.apellido = surname);
  }
}

var messi = new Persona("Lionel", "Messi");
var pepe = new Persona("Pepe", "Henry");
var marta = new Persona("Marta", "Rodriguez");

console.log(messi);
