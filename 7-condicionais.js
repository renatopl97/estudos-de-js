console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false; //se verdadeiro=acompanhado e se false=sem companhia 

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);
//A estrutura começa vendo SE o comprador é maior, se sim, diz que é maior e remove a cidade selecionada, senão, entra nas possibilidades de menor
//Se acompanhado pode comprar passagem, senão retornar que é menor e desacompanhado, não pode comprar
if (idadeComprador >= 18) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1,1);
}else{
    if (estaAcompanhado){
        console.log("Comprador menor de idade, mas acompanhado.");
        listaDeDestinos.splice(1,1);
    }else{
        console.log("Comprador menor de idade e desacompanhado, não posso vender.");
    }
}

console.log(listaDeDestinos);
