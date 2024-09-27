// ENTRADA
// CRIE UM PROGRAMA QUE VALDA E MNSTRE A ENTRADA DOIS E QUE LEIA DOIS VALORES NUMERICOS DO USUARIOSE DEPOIS CALCULE SUA SOMA EM SEGUIDA VALIDE SE O O RESULTADO DA SOMA FPOR MAIOR QUE 5 ENTÂO ESCREVA A MENSAGEM PASSOU DO LIMITE SENAO ESCREVA A MENSAGEM DENTRO DO LIMITE
//
//PROCESSAMENTO
//3- somar os valores das variaveis valor1 e valor2
// e guardar em variavel chamada resultado
const soma = (valor1, + valor2)
console.log(soma)
//4 - validar se o resultado da soma for maior que 5
//e escrever a mensagem "passou do limite"
// senâo, escrever a mensagem" dentro do limite"
//se resultado foir maior que5, entao escreva a mensagem "pssou dos limtes"
const resultado = valor1 + valor2
console.log(resultado)
let mensagem = ""
if (resultado > 5) {
    mensagem = "Passou do limite"
}
else {
    mensagem = "Dentro do limite"
}
const percentual = (valor1 * 0, 10) / valor2
// se o precentual for maior ou igual a 10
// entao , mue a mensagem para percentual ok
//senao mude a mnegsam para percentual alterado

}
if (pergunta >= 10) {
    mensagem = "percentual ok"
} else
    mensagem = "percentual alterado"
{




    //ENTRADA
    //1- ober um valor em guardar em variavel chamada valor1
    //2-obter um valor em guardar em uma variavel chamada valor2
    const valor1 = Number(prompt("Primeiro valor:"))
    const valor2 = Number(prompt("Segundo valor"))
    console.log(valor1, valor2)

    //SAIDA
    // imprimi a mensagem de acordo
    const divRoot = document.getElementById("root")
    divRoot.appendChild(document.createTextNode(mensagem))