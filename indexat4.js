// pede ao usuario para informar o valor de sua compra
let valorCompra = prompt("Digite o valor da compra:");

// verifica se o caracter informado é realmente um numero
if (isNaN(valorCompra)) {
    alert("valor inválido!");
} else {
    valorCompra = Number(valorCompra);

    // verifica se o valor da compra deu mais ou menos que 100, para atribuir o desconto
    if (valorCompra >= 100) {
        let desconto = valorCompra * 0.10;
        let valorFinal = valorCompra - desconto;
        alert("Você ganhou um desconto de 10%!");
        alert("Valor do desconto: R$ " + desconto.toFixed(2));
        alert("Valor total com desconto: R$ " + valorFinal);
    } else {
        alert("Compra abaixo de R$100. Sem desconto aplicado.");
        alert("Valor total: R$ " + valorCompra);
    }
}