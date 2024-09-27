// esvreva um programa que diga ser o numero 
// informado pelo usario e par ou impar
//imprima o numero e o resutado

const divroot = document.getElementById("root")

const numero = Number(prompt('informe um numero'))

const resto = numero % 2

console.log(resto)

const mensagem = ""

if (resto ===) {
    mensagem = '${numero} é par'.
}
else {
    mensagem = "${numero} é impar".
}

divroot.append(document.createrTextnode(mensagem))
