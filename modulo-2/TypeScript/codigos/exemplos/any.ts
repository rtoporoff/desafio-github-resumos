let valorAny: any; //any é um tipo que pode receber qualquer tipo. any pode ser qualquer tipo de objeto, inclusive uma string
valorAny = 3; //geralmente é uma má prática utilizar o any
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste'
valorString = valorAny;
let valorString2: string = 'testao';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('ola', ', como vai?');