function filtraPares (arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 === 0; //% significa módulo. pega quais dos itens é divisível por 2. se colocar o !===, irá procurar pelos números ímpares
}

const meuArray = [1, 23, 55, 67, 30, 2, 3, 4];

console.log(filtraPares(meuArray));