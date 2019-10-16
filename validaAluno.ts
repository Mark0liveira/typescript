import {aluno, notasDasDisciplinas} from "./alunos"
export class validaNotaAluno extends aluno implements notasDasDisciplinas {
    portugues: number
    matematica: number
    geografia: number

    constructor(){
        super("Frederico Hemmer");
        this.portugues = 63;
        this.matematica = 60;
        this.geografia = 60;
    }

    saudacao(){
        console.log(`Seja bem vindo ${this.nome}`);
    }
}