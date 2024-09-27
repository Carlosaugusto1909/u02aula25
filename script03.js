// faça um programa que obtnha quatro notas 
// em seguida calculea media simples das notas
//se a media for maior ou igual a 7, imprima"aluno aprovado".
// senao ,se a nota for maior oi igual a5, imprima "alun em recuperaçao"
//senao ,imprima "aluno reprovado"


//ENTRADA
const Nota1 = Number(prompt("imforme a primeira nota"))
const nota2 = Number(prompt("imfome a segunda nota"))
const nota3 = Number(prompt("imforme a terceira nota"))
const nota4 = Number(prompt("Imforme a qurta nota")

// processado
const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagemm = ""
//se a media é maior ou igual a 7, aluno aprovado
//senao se a media for maior ou igual a 5 , aluno em recuperaçao
//senao aluno reprovado
if (media >= 7) {
    mensagem = "aluno aprovado - Media " + media
} else {
    if (media >= 5) {
        mensagem = "Aluno em recuperaçao"
    } else {
        mensagem = "aluno reprovado"
    }
}
document.body.appendChild(document.createTextNode(mensagem))