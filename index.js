// organiza o array ( Rol )
const arr = [
  7, 38, 27, 14, 18, 34, 16, 42, 28, 24, 40, 20, 23, 31, 37, 21, 30, 25, 17, 28,
  33, 25, 23, 19, 51, 18, 29
];
const organizar = data => data.sort((a, b) => (a - b));

const getMedia = data => {
  let cont = 0;
  data.forEach(number => cont += number);

  return (cont / data.length).toFixed(2);
}

const desvioMedio = data => {
  let soma = 0;
  data.forEach(number => soma += Math.abs(number - getMedia(data)));

  return (soma / data.length).toFixed(2);
}

const variancia = data => {
  let soma = 0;
  data.forEach(number => soma += Math.pow((number - getMedia(data)), 2))

  return (soma / (data.length - 1)).toFixed(2);
}

const desvioPadrao = variancia => Math.sqrt(variancia).toFixed(2);

console.log(`Rol: ${organizar(arr)}`);
console.log(`Media: ${getMedia(arr)}`);
console.log(`Desvio Medio: ${desvioMedio(arr)}`);
console.log(`variancia: ${variancia(arr)}`);
console.log(`desvio Padrao: ${desvioPadrao(variancia(arr))}`);