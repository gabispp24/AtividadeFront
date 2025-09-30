// 1. Criar um array com 5 nomes
let nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];

// 2. Exibir o terceiro nome no console
console.log("Terceiro nome:", nomes[2]); // Carla

// 3. Adicionar um nome ao final e um no início do array
nomes.push("Fábio");        // Adiciona no final
nomes.unshift("Gabrielle"); // Adiciona no início
console.log("Array após adicionar nomes:", nomes);

// 4. Remover o último nome e exibir o array atualizado
nomes.pop(); // Remove o último nome
console.log("Array após remover o último nome:", nomes);

// 5. Usar map() para criar um novo array dobrando os valores de [2, 4, 6, 8]
let numeros = [2, 4, 6, 8];
let numerosDobrados = numeros.map(num => num * 2);
console.log("Array com valores dobrados:", numerosDobrados);

// 6. Usar filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
let lista = [1, 3, 5, 7, 9];
let maioresQueCinco = lista.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQueCinco);
