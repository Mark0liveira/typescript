import {validaNotaAluno} from "./validaAluno"
import {aluno, notasDasDisciplinas} from "./alunos"
import * as _ from "lodash"

console.log(_.pad("Typescript Examples", 40, "="))
let novoAluno = new aluno("Frederico Hemmer")
novoAluno.saudacao()

let adiciona = new validaNotaAluno();
adiciona.saudacao();

let validacao = (novoAluno: notasDasDisciplinas) => (novoAluno.portugues + novoAluno.matematica + novoAluno.geografia)/3 > 69
console.log(`O aluno foi aprovado nas disciplinas? ${validacao( adiciona ) ? "Sim":"Não"}`)
