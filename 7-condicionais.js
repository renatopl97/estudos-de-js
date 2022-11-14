console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhado = false; //se verdadeiro=acompanhado e se false=sem companhia
const temPassagem = true

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);
//A estrutura começa vendo SE o comprador é maior, se sim, diz que é maior e remove a cidade selecionada, senão, entra nas possibilidades de menor
//Se acompanhado pode comprar passagem, senão retornar que é menor e desacompanhado, não pode comprar
// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade.");
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhado == true) {
//   console.log("Comprador menor de idade, mas acompanhado.");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Comprador menor de idade e desacompanhado, não posso vender.");
// }
// o || significa "ou"
if (    idadeComprador >= 18 || estaAcompanhado == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(2, 1);
} else {
  console.log("Comprador menor de idade e desacompanhado, não posso vender.");
}

console.log("Embarque: \n\n");
// %% significa "e"
if (idadeComprador >=18 && temPassagem == true || estaAcompanhado == true && temPassagem == true ) {
    console.log("Bom voo!!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

//para "identar" o código alt+shift+f
