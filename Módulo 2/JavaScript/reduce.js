function somaNumeros(arr) {
    return arr.reduce (function(prev, current){
        console.log({ prev});
        console.log({ current }); //se ysa os { } pra declarar como objeto
        return prev + current ;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));