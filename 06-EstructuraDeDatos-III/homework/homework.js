'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

// Definimos nuestro arbol binario. 
function BinarySearchTree(value) {

      this.value = value;
      this.left = null;
      this.right = null;

}

// insertamos un valor a nuestro arbol.
BinarySearchTree.prototype.insert = function(value){

      if(value > this.value){

            if(!this.right) this.right = new BinarySearchTree(value);
            else this.right.insert(value);

      }else{

            if(!this.left)this.left = new BinarySearchTree(value);
            else this.left.insert(value);
      }

}

// cuenta la cantidad de ramas de nuestro arbol. 

BinarySearchTree.prototype.size = function (){

      if(!this.left && !this.right){

         return 1;
      }

      if(!this.right) return 1 + this.left.size();
      if(!this.left) return 1 + this.right.size();
      if(this.left && this.right) return 1 + this.left.size() + this.right.size();
}



// si existe el valor, retornara un true, ese es nuestro metodo contains 

BinarySearchTree.prototype.contains = function(value){

      if(value === this.value) return true;
      if(value > this.value){

         if(!this.right) return false;
         else return this.right.contains(value);
      }else{

         if(!this.left) return false;
         else return this.left.contains(value);
      }


}

BinarySearchTree.prototype.depthFirstForEachPreOrder = function(result = []){

      if(this.value)result.push(this.value);
      else return false;
      if(this.left) this.left.depthFirstForEachPreOrder(result);
      this.right && this.right.depthFirstForEachPreOrder(result);
      return result;


}

BinarySearchTree.prototype.depthFirstForEach = function(cb,pedido){
      //pedido -> 'in-order' => left, value, right
      //pedido -> 'pre-order' => value, left, right
      //pedido -> 'post-order' => left, right, value

      if(pedido === 'in-order' || pedido === undefined){
         if(this.left && this.left.depthFirstForEach(cb,pedido));
         cb(this.value);
         if(this.right && this.right.depthFirstForEach(cb,pedido));
      }

      if(pedido === 'pre-order'){
         
         cb(this.value);
         if(this.left && this.left.depthFirstForEach(cb,pedido));
         if(this.right && this.right.depthFirstForEach(cb,pedido));

      }

      if(pedido === 'post-order'){
         
         if(this.left && this.left.depthFirstForEach(cb,pedido));
         if(this.right && this.right.depthFirstForEach(cb,pedido));
         cb(this.value);
      }


}


BinarySearchTree.prototype.breadthFirstForEach = function(cb,value = []){

      if(this.left !== null){
         value.push(this.left);
      }
      if(this.right !== null){

         value.push(this.right);
      }

      cb(this.value);
      if(value.length > 0){

         value.shift().breadthFirstForEach(cb, value)
      }
}


let instanceTree = new BinarySearchTree(25);

instanceTree.insert(26);
instanceTree.insert(35);
instanceTree.insert(10);
instanceTree.insert(12);
instanceTree.insert(11);
console.log(instanceTree.depthFirstForEachPreOrder())
console.log(instanceTree.contains(26));
console.log(instanceTree.size());
console.log(instanceTree);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
