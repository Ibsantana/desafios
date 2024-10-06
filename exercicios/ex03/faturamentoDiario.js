const fs = require('fs');

// Lê o arquivo JSON com os dados de faturamento
const rawData = fs.readFileSync('faturamento.json');
const faturamento = JSON.parse(rawData);

// Filtra os dias com faturamento
const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

// Calcula o menor e o maior valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcula a média mensal de faturamento
const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Conta o número de dias com faturamento acima da média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor valor de faturamento: ${menorFaturamento}`);
console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
