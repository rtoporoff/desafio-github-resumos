interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;  //opcional, pois o cachorro pode ou não ter um parque favorito
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro] : Cachorro [K]; //para cada chave (K) no chaveiro (keyof) de cachorro, será feito um cachorro de chave
}

class MeuCachorro implements Cachorro {
        nome;
        idade;

        constructor(nome, idade) {
            this.nome = nome
            this.idade = idade;
        }
}

const cao = new MeuCachorro('Haru', 2);
