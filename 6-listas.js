console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log(salvador, saoPaulo, rioDeJaneiro);
//para comentar código, seleciona o que for comentar e usa ctrl+k+c
//para retirar comentário ctrl+k+u

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);//para adicionar uma informação ao array
console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//retirar um elemento do array, primeiro espaço é a posição do elemento e o segundo é quantos elementos retirar (no js, a contagem começa em 0)
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);//colocando a posição de um item entre colchetes é possível imprimir apenas um determinado item