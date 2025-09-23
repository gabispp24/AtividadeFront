// 1)

let paisA = 80000;
let paisB = 200000;
let taxaA = 0.03; 
let taxaB = 0.015; 
let anos = 0;

while (paisA <= paisB) {
  paisA += paisA * taxaA;
  paisB += paisB * taxaB;
  anos++;
}

console.log('Serão necessários ${anos} anos para que o país A ultrapasse ou iguale o país B.');

// 2)

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Quantidade de pares: ${pares}`);
console.log(`Quantidade de ímpares: ${impares}`);

// 3)

let n = parseInt(prompt("Quantos números você deseja informar?"));
let numeros = [];
let soma = 0;

for (let i = 0; i < n; i++) {
  let valor = parseFloat(prompt(`Digite o ${i+1}º número:`));
  numeros.push(valor);
  soma += valor;
}

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);

// 4)

let salario = 1000;
let ano = 1996;
let percentual = 0.0015; // 0,15%

while (ano <= new Date().getFullYear()) {
  salario += salario * percentual;
  percentual *= 2;
  ano++;
}

console.log(`O salário atual é: R$ ${salario.toFixed(2)}`);

// 5)

function circulo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"));
  let area = Math.PI * Math.pow(raio, 2);
  let perimetro = 2 * Math.PI * raio;

  console.log(`Área: ${area.toFixed(2)}`);
  console.log(`Perímetro: ${perimetro.toFixed(2)}`);
}

circulo();

// 6)

function investimento() {
  let capital = parseFloat(prompt("Digite o capital inicial:"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;
  let tempo = parseInt(prompt("Digite o tempo em meses:"));

  let montante = capital * Math.pow((1 + taxa), tempo);

  console.log(`O montante ao final do período será: R$ ${montante.toFixed(2)}`);
}

investimento();


