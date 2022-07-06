"use strict";
let valorAny; //any é um tipo que pode receber qualquer tipo. any pode ser qualquer tipo de objeto, inclusive uma string
valorAny = 3; //geralmente é uma má prática utilizar o any
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('ola', ', como vai?');
