// pede ao usuario para digitar um numero aleatorio
let numero = prompt("Digite um número:");

// confirma se o caracter informado é mesmo um numero
if (isNaN(numero)) {
    alert("isso não é um número válido!");
} else {

    // verifica se o numero é multiplo de 5 
    numero = Number(numero);
    if (numero % 5 === 0) {
        alert("Esse número é um múltiplo de 5!");
    } else {
        alert("Esse número não é um múltiplo de 5!");
    }
}