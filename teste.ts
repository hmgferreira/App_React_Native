
let nome: string = "Max";


function setDados(nome: string, idade: number) {

}

setDados('Max', 26)


type PessoaInterface = {
    nome: string,
    idade: number,
    sexo?: string
}

function recebeObjeto(pessoa: PessoaInterface) {
    console.log(pessoa.nome);
    
}

const pessoa2 = {
    nome: "Angelo",
    idade: 29,
};

recebeObjeto(pessoa2);