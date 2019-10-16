class aluno {

    constructor(public nome:string){}

    saudacao(){
        console.log(`Seja bem vindo ${this.nome}`);
    }
}

interface notasDasDisciplinas{
    portugues: number
    matematica: number
    geografia: number
}

export {aluno, notasDasDisciplinas}