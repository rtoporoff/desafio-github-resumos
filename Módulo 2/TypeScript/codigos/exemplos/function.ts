function printaValoresNumericos(numero1: number, numero2: number): void { 
    console.log(numero1 + numero2);
}

function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {  //callback é uma função passada como argumento para outra função. faz com que a função seja executada após uma ação específica
    let resultado = numero1 + numero2; //let cria uma variável, mas de escopo de bloco
    return callback(resultado); 
}

function aoQuadrado (numero: number): number {
    return numero * numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
//vai fazer 1 + 3 = 4. 4 ao quadrado = 16