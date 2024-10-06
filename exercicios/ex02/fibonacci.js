// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return b === num || num === 0;
}

// Número a ser verificado
let number = 21; // Você pode mudar esse valor para testar outros números

// Verifica se o número pertence à sequência de Fibonacci e imprime o resultado
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
