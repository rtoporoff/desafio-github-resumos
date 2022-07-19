async function resolvePromise () {
    const myPromise = new Promise ((resolve, reject) => {
        window.setTimeout(() => {
            resolve (console.log ('Resolvida!'));
        }, 3000);
    });

    const resolved = await myPromise   //a palavra "await" é criada especificamente para lidar com Promises
        .then ((result) => result + ' passando pelo then')
        .then ((result) => result + ' e agora acabou!')
        .catch ((err) => console.log(err.message));

    return resolved;
}

// após 2 segundos, retornará o valor
// "resolvida passando pelo then e agora acabou!"