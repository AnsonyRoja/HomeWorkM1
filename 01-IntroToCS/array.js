var array = ["hola", { name: "Messi" }, 10, true, [1, 2, 3]];
//             0            1           2    3       4
var posicion = 4;

console.log(array[posicion].length, "< Longitud");
// console.log(array[3 - 2]); // 3-2 > return 1
// console.log(array[1]);

var numberTwo = array[4][1]; // > [1,2,3] > array[1]
console.log(numberTwo);
