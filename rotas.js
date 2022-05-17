const capitaisNorte = [
  "Porto Velho",
  "Macapá",
  "Manaus",
  "Belém",
  "Boa Vista",
  "Palmas",
  "Rio Branco",
];
const capitaisSudeste = [
  "Rio de Janeiro",
  "São Paulo",
  "Belo Horizonte",
  "Vitória",
];
const capitaisNordeste = [
  "São Luís",
  "Teresina",
  "Fortaleza",
  "Natal",
  "João Pessoa",
  "Recife",
  "Maceió",
  "Aracaju",
  "Salvador",
];
const capitaisSul = ["Curitiba", "Porto Alegre", "Florianópolis"];
const capitaisCentroOeste = ["Brasília", "Goiânia", "Cuiabá", "Campo Grande"];

const arrays = [
  ["Rio Branco", "Macapá"],
  ["Macapá", "Manaus"],
  ["Belém", "Porto Velho"],
  ["Boa Vista", "Palmas"],
  ["Belém", "Rio Branco"],
  ["Palmas", "Rio Branco"],
  ["Boa Vista", "Salvador"],
  ["Maceió", "Fortaleza"],
  ["São Luís", "Salvador"],
  ["João Pessoa", "Recife"],
  ["Recife", "Teresina"],
  ["Teresina", "Natal"],
  ["Aracaju", "Salvador"],
  ["Natal", "Aracaju"],
  ["Goiânia", "Cuiabá"],
  ["Cuiabá", "Campo Grande"],
  ["Campo Grande", "Brasília"],
  ["Vitória", "Cuiabá"],
  ["Vitória", "Belo Horizonte"],
  ["Belo Horizonte", "São Paulo"],
  ["São Paulo", "Rio de Janeiro"],
  ["Rio de Janeiro", "Curitiba"],
  ["Curitiba", "Florianópolis"],
  ["Florianópolis", "Porto Alegre"],
];

function teste() {
  const regioes = ["Sul", "Norte", "Sudeste", "Centro-Oeste", "Nordeste"];
  const rotas = [
    ["Norte", "Nordeste"],
    ["Sudeste", "Centro-Oeste"],
    ["Sudeste", "Sul"],
  ];
  const newarray = [];
  for (index = 0; index < regioes.length; index++) {
    for (j = 0; j < regioes.length; j++) {
      if (regioes[index] != regioes[j]) {
        newarray.push([regioes[j], regioes[index]]);
      }
    }
  }
  const equal = [];
  for (index = 0; index < newarray.length; index++) {
    for (j = 0; j < rotas.length; j++) {
      if (rotas[j] !== newarray[index]) {
        equal.indexOf(newarray[index]) === -1
          ? equal.push(newarray[index])
          : "";
      }
    }
  }
  console.log(equal.length);
}

teste();
