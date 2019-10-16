"use strict";
exports.__esModule = true;
var aluno = /** @class */ (function () {
    function aluno(nome) {
        this.nome = nome;
    }
    aluno.prototype.saudacao = function () {
        console.log("Seja bem vindo " + this.nome);
    };
    return aluno;
}());
exports.aluno = aluno;
