const arr = [
  25, 75, 65, 12, 33, 3, 5, 76, 40, 55
];

const organizar = data => data.sort((a, b) => (a - b));

const getMedia = data => {
  let cont = 0;
  data.forEach(number => cont += number);

  return (cont / data.length).toFixed(2);
}

const mediana = data => {
  if (data.length % 2 === 0) {
    return (data[Math.floor(data.length / 2)] + data[Math.floor(data.length / 2) - 1]) / 2;
  } else {
    return data[Math.floor(data.length / 2)];
  }
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
console.log(`Mediana: ${mediana(arr)}`);
console.log(`Desvio medio: ${desvioMedio(arr)}`);
console.log(`Variancia: ${variancia(arr)}`);
console.log(`Desvio padrao: ${desvioPadrao(variancia(arr))}`);