// Implemente uma função que receba uma lista de inteiros, e retorne uma string com os valores da lista ordenados de forma crescente descartando repetições e separados por um espaço. Além disso, se a função identificar números consecutivos, deve ser retornado uma string com o valor inicial e o final da sequência concatenados pelo símbolo ":"

// Exemplo:

// orderNGroup( [ 7, 3, 15, 0, -2, 6, -5, 1, 14, -1, 100,5 ] );

// Lista ordenada: -5,-2,-1,0,1,3,5,6,7,14,15,100
// retorno: "-5 -2:1 3 5:714:15 100"

function orderNGroup(lista) {
  const uniqueLista = [];

  const orderedLista = lista.sort((a, b) => a - b);

  for (let i = 0; i < orderedLista.length; i++) {
    if (orderedLista[i] + 1 !== orderedLista[i + 1]) {
      uniqueLista.push(orderedLista[i]);
      if (orderedLista[i + 1]) uniqueLista.push(orderedLista[i + 1]);
    }
  }
  let unique = [...new Set(uniqueLista)];

  return unique.join(' ');
}
orderNGroup([7, 3, 15, 0, -2, 6, -5, 1, 14, -1, 100, 5]);
