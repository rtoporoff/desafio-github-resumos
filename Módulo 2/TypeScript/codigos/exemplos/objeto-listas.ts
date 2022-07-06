const pessoa = {
    nome: 'Renan',
    idade: 30,
    profissao: 'desenvolvedor'
}

pessoa.idade = 31;

const leticia: {nome: string, idade: number, profissao: string} = { //o "=" é para igualar o objeto
    nome: 'Letícia',
    idade: 27,
    profissao: 'medica'
}

const mayara: {nome: string, idade: number, profissao: string} = { //o "=" é para igualar o objeto
    nome: 'Douglas',
    idade: 30,
    profissao: 'medica'
}

enum Profissao {
    Professora, 
    Atriz,
    Medica,
    Desenvolvedor
}

interface Pessoa { 
    nome: string,
    idade: number,
    profissao?: Profissao //criamos um tipo e um "enum", que é basicamente um grupo de constantes. no caso, é Profissao
    //?  é para dizer que pode ou não receber um valor desse elemento
}

interface Estudante extends Pessoa {
    materias: string[] //"[ ] " significa "lista" em typescript
}

const chico: Pessoa = {
    nome: 'Chico',
    idade: 29,
    profissao: Profissao.Desenvolvedor
}

const felipe: Pessoa = {
    nome: 'Felipe',
    idade: 30,
    profissao: Profissao.Desenvolvedor
}

const guilherme: Estudante = {
    nome: 'Guilherme',
    idade: 26,
    profissao: Profissao.Desenvolvedor,
    materias: ['Matemática discreta', 'programação']
}

const douglas: Estudante = {
    nome: 'Douglas',
    idade: 26,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    } //vai iterar essa lista para cada constante "item" de lista, ela vai dar o console.log em "- " com o item
}

listar(douglas.materias);