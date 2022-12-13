const nome ="Raissa Dolci";
let nome2 = "";

let pessoaDefault = {
    nome: "Raissa Dolci",
    idade: "22",
    trabalho: "Programadora"
};


function alterarNome() {
    nome2 = "Joana Peixoto"
    console.log("Nome dentro da função é", nome2);
}

function receberAlterar(novonome) {
    nome2 = novonome;
    console.log("Nome com atributo:", nome2);
}

//alterarNome();
//receberAlterar("Carlos alberto");

function imprimirPessoas(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

//imprimirPessoas(pessoaDefault);

// imprimirPessoas({
//     nome: "Marina Ruy Barbosa",
//     idade: "29",
//     trabalho: "Atriz"
// })




