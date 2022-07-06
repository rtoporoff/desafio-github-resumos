type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === "string" || typeof input2 === 'string') {
        return input1.toString() + input2.toString(); //colocando o toString, o valor retornado será o mesmo, MAS se um deles for string e o outro número, retornará apenas a string
    } else {
        return input1 + input2;
    }
}

console.log(somarValores(1,5));
console.log(somarValores('ola', ' , tudo bem?'));
console.log(somarValores('que dia é hoje? ', 5));