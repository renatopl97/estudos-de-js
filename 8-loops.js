console.log(`\n  Trabalhando com lops`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhado = false; //se verdadeiro=acompanhado e se false=sem companhia
let temPassagem = false;
const destino = "Palmas";

console.log(`\n Destinos possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let existe = false;

// while(contador<3 || existe == false){
//     if (listaDeDestinos[contador] == destino) {
//         console.log("Destino existente.");
//         existe = true
//     }
//     contador += 1;
// }

while(contador<3){
    if (listaDeDestinos[contador] == destino) {
        existe = true
        break
    }
    contador += 1;
}
console.log(`Destino existe: ${existe}`);


