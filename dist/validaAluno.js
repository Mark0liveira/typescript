"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var alunos_1 = require("./alunos");
var validaNotaAluno = /** @class */ (function (_super) {
    __extends(validaNotaAluno, _super);
    function validaNotaAluno() {
        var _this = _super.call(this, "Frederico Hemmer") || this;
        _this.portugues = 63;
        _this.matematica = 60;
        _this.geografia = 60;
        return _this;
    }
    validaNotaAluno.prototype.saudacao = function () {
        console.log("Seja bem vindo " + this.nome);
    };
    return validaNotaAluno;
}(alunos_1.aluno));
exports.validaNotaAluno = validaNotaAluno;
