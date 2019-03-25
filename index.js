// organiza o array ( Rol )
const arr = [
  7, 38, 27, 14, 18, 34, 16, 42, 28, 24, 40, 20, 23, 31, 37, 21, 30, 25, 17, 28,
  33, 25, 23, 19, 51, 18, 29              
];
const organizar = data => data.sort((a, b) => (a - b));

console.log(organizar(arr));

//media
const getMedia = data => {
  let cont = 0;
  data.forEach(number => parseInt(cont += number));

  return (cont / data.length).toFixed(2);
}
console.log(getMedia(arr));