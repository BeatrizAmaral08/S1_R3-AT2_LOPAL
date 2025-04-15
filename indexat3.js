// pede ao usuario para digitar um numero aleatorio
let numero = prompt("Digite um número:");

// confere se o caracter informado realmente é um numero
if (isNaN(numero)) {
    alert("Isso não é um número válido!");
} else {
    
    // verifica se o numero é impar ou par, no caso multiplo de dois
    numero = Number(numero);
    if (numero % 2 === 0) {
        alert("Esse número é par!");
    } else {
        alert("Esse número é ímpar!");
    }
}