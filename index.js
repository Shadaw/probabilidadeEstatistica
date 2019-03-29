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

const amplitudeTotal = data => organizar(data)[data.length - 1] - organizar(data)[0];

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
console.log(`Amplitude total: ${amplitudeTotal(arr)}`)
console.log(`Media: ${getMedia(arr)}`);
console.log(`Desvio medio: ${desvioMedio(arr)}`);
console.log(`Variancia: ${variancia(arr)}`);
console.log(`Desvio padrao: ${desvioPadrao(variancia(arr))}`);