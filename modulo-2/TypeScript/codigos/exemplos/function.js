"use strict";
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2; //let cria uma variável, mas de escopo de bloco
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
//vai fazer 1 + 3 = 4. 4 ao quadrado = 16
