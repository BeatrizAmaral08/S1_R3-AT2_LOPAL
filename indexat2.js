// pede ao usuário para informar sua idade
let idade = prompt("Informe sua idade:");

//verifica se o caracter informado é um numero
if (isNaN(idade) || idade <0){
 alert("Isso não é um numero valido!")
}else

// verifica se a idade é maior ou menor que 18
if (idade >= 18) {
    alert("Voce é maior de idade!");
} else {
    alert("Voce é menor de idade!");
}