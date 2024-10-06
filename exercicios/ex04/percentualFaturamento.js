// Dados de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o valor total de faturamento
const total = Object.values(faturamentoPorEstado).reduce((acc, val) => acc + val, 0);

// Calcula e imprime o percentual de representação de cada estado
for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / total * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
}
