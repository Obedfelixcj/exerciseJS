//.filter
const numbers = [2, 5, 3, 10, 6, 4, 7];

const numFilter = numbers.filter(num => num >= 5);

console.log("Números mayores o iguales a 5:");
numFilter.forEach(num => {
  console.log(num);
});

//.slice
const frutas = ['naranja', 'platano', 'manzana', 'fresa', 'kiwi'];

const frutasSeleccionadas = frutas.slice(3, 5);

console.log("Frutas en las posiciones 3 y 4:");
console.log(frutasSeleccionadas);

//.map
const numeros = [5, 10, 15, 20, 25];

const numerosModificados = numeros.map((numero, index) => {
  const numeroModificado = numero + 10;
  console.log(`Índice ${index}: ${numeroModificado}`);
  return numeroModificado;
});

//concat
const arreglo1 = ['H', 'I', 'J'];
const arreglo2 = ['K', 'L', 'M'];

const arregloConcatenado = arreglo1.concat(arreglo2);

console.log(arregloConcatenado);

//includes
const paises = ["Mexico", "USA", "Francia"];

const existeFrancia = paises.includes("Francia");

if (existeFrancia) {
  console.log("Cierto");
} else {
  console.log("Falso");
}
