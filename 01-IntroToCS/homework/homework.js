"use strict";

function BinarioADecimal(num) {
  // escriben aca el codigo
  // AND PARA EL CARRY 
  // XOR PARA LA SUMA 
  // posiciones comienzan desde derecha a izquierda
//      2^2 2^1 2^0
  //     1    0   1 
  //     4    2   1

   //     4     0    1  = 5


    let pos = num.length - 1;

  let sumaDeBinarios = 0;
    for(let i = 0; i < num.length;i++){


        sumaDeBinarios +=  num[i] * Math.pow(2,pos);


            
        pos--;
    }

  return sumaDeBinarios;


  

}

BinarioADecimal('111');

function DecimalABinario(num) {

    // Decimal a binario 
    // Dividirlo entre 2 
    // sacar el resto de la division 
    // y luego concatenarlo desde la derecha a izquierda, ya que ese es su origen de ser.

    let concatenarStr = "";
    while(num > 0){


        concatenarStr = (num % 2) + concatenarStr;



        num =  Math.floor(num / 2);
        console.log(num);
    }

      console.log(concatenarStr);

      return concatenarStr;
}

DecimalABinario(4)

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
