# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript


x = 1; // es una variable global 
var a = 5;// variable global
var b = 10;
var c = function (a, b, c) {

   var x = 10;
   console.log(x); // 10
   console.log(a); // 8 scope local 
   var f = function (a, b, c) {
      b = a;
      console.log(b);// 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9 scope local
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar);// undefined
console.log(baz); // baz is not defined, y se rompe el codigo, el interprete llega hasta aqui. 
foo(); 
function foo() {
   console.log('Hola!');
}
var bar = 1; 
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm);// Reverse Flash
}
console.log(instructor);// The Flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity es un estudio matematico. que definio eso 
{}[0] // undefined ya que no tienen nada  el objeto que esta definido junto al arreglo.
parseInt("09") // 9 
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true por el simbolo de exclamacion, que le indica al interprete que lo reconozca como lo contrario, es decir si es false, dara true, si no fuera por ese signo, daria false, porque el valor de referencia que tiene un arreglo no es igual que otro. 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript

function test() {

   console.log(a); // undefined, da este valor porque en la fase de creacion reconoce su hoisting
   console.log(foo());  // 2 y lo mismo ocurre con las funciones ya que el call stack que tiene
   // por defecto javascript, reconoce principalmente y las coloca en la parte superior del contexto global, esto se le llama hoisting y solo ocurre con las variables declaradas con var y funciones. 

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   
   if (food) { // no entra a la funcion porque el booleano que se le esta pasando por parametro 
   // no es true. 
      
      var snack = 'Friskies';
   
      return snack;
   }

   return snack; // retorna undefined porque reconoce el hoisting de la variable declarada 
   //como snack dentro del contexto local. 

}

getFood(false);

```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined porque el contexto que se crea dentro de la funcion no reconoce la propiedad
// de full name y tampoco esta afuera 
// la variable que esta afuera que se llama var full name, porque el objeto this esta haciendo
// referencia a un objeto mas no a una variable.  
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 01 por el interprete comienza de hilo en hilo buscando en la fase de creacion
   // las funciones y variables que tengan hoisting, en este contexto solo vemos las salidas.
   //asi que comenzamos con el primero ya que esta en la linea principal de la funcion
   setTimeout(function () { // esto demorara y por lo tanto lo llevara a su web apis
   // el cual le daran soporte para finalizar esa tareas asincronas de forma, que pueda
   // seguir leyendo lo que falta, ya que javascript solo lee por hilo, es decir por linea 
      console.log(2);// 04
   }, 1000);
   setTimeout(function () { // tiene menos tiempo y por lo tanto queda de tercero pero igualmente
   // pasa al event loop y ayuda a javascript en su parte sincronica, a que no se demore haciendo
   // su trabajo que es leer hilo por hilo. y nunca atrasar su trabajo, sincronico 
      console.log(3);// 03
   }, 0);
   console.log(4);//02  es el segundo hilo que se ejecuta en el call stack de javascript, 
   // porque, solo es una salida y javascript lo interpreta como un proceso sincrinico que el mismo
   // puede hacer. 
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
