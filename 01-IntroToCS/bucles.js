//                               index

// Mostrar todos los nombres en el celular

// Solucion fuerza bruta
// console.log(mascotas[0]);
// console.log(mascotas[1]);
// console.log(mascotas[2]);
// console.log(mascotas[3]);
// console.log(mascotas[4]);
// console.log(mascotas[5]);

// Bucles

// for (let index = 0; index < mascotas.length; index++) {
//   console.log(mascotas[index]);
// }

// var index = 0;
// while (index < mascotas.length) {
//   console.log(mascotas[index]);
//   index++;
//   // index = index +1
//   // index += 1
// }
var mascotas = ["Michi", "Tango", "Panky", "Piojo", "Polar", "Pato"];
//                0                                             5
//                          funcion("Panky")

// Metodos bucle
//   funcion("Messi");
mascotas.forEach((nombre) => {
  console.log(nombre);
});
