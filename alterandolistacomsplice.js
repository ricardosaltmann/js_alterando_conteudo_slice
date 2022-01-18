const listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(listaDeChamada)

/*remover ana e caio
splice precisa que seja informado o primeiro e o ultimo elemento*/
listaDeChamada.splice(1,2,'Rodrigo')
console.log(listaDeChamada)
/* A ana esta no indice 1 e o caio no indice 2, e adicionamos o rodrigo, porém esse parametro não é obrigatorio.*/

/* 
Para adicionar um nome em um determinado indice, informamos o indece que ele vai entrar, e depois o numero 0, 
assim ele nao vai remover nenhum item, apenas adicionar

*/
const listaDeChamada2 = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

listaDeChamada2.splice(2,0,'Rodrigo')
console.log(listaDeChamada2)