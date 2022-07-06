"use strict";
const pessoa = {
    nome: 'Renan',
    idade: 30,
    profissao: 'desenvolvedor'
};
pessoa.idade = 31;
const leticia = {
    nome: 'Letícia',
    idade: 27,
    profissao: 'medica'
};
const mayara = {
    nome: 'Douglas',
    idade: 30,
    profissao: 'medica'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Medica"] = 2] = "Medica";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
})(Profissao || (Profissao = {}));
const chico = {
    nome: 'Chico',
    idade: 29,
    profissao: Profissao.Desenvolvedor
};
const felipe = {
    nome: 'Felipe',
    idade: 30,
    profissao: Profissao.Desenvolvedor
};
const guilherme = {
    nome: 'Guilherme',
    idade: 26,
    profissao: Profissao.Desenvolvedor,
    materias: ['Matemática discreta', 'programação']
};
const douglas = {
    nome: 'Douglas',
    idade: 26,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    } //vai iterar essa lista para cada constante "item" de lista, ela vai dar o console.log em "- " com o item
}
listar(douglas.materias);
