const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const vin = "1HGCM82633A004352";

//1HG CM8263 3A004352

const encrypt = (codigovin) => {
  const blocos = [
    codigovin.substr(0, 3),
    codigovin.substr(3, 6),
    codigovin.substr(9),
  ];
  const blocosEncriptados = [];
  for (const bloco of blocos) {
    let novoBloco = "";
    for (const letra of bloco) {
      const indice = alfabeto.indexOf(letra);
      novoBloco += alfabeto[(indice + 7) % 36];
    }
    const indiceAleatorio = Math.floor(Math.random() * (25 + 1));
    novoBloco = alfabeto[indiceAleatorio].toLowerCase() + novoBloco;
    blocosEncriptados.push(novoBloco);
  }
  const embaralhado = blocosEncriptados.sort(() => Math.random() - 0.5);

  return embaralhado.join("");
};

const decrypt = (mensagem) => {
  const blocosDecriptografados = [];
  let bloco = "";
  for (let i = 1; i < mensagem.length; i++) {
    if (!alfabeto.includes(mensagem[i])) {
      blocosDecriptografados.push(bloco);
      bloco = "";
    } else {
      const indice = (alfabeto.indexOf(mensagem[i]) - 7 + 36) % 36;
      bloco += alfabeto[indice];
    }
  }
  blocosDecriptografados.push(bloco);
  const novoArray = [];
  for (const blocoDec of blocosDecriptografados) {
    if (blocoDec.length === 3) novoArray[0] = blocoDec;
    if (blocoDec.length === 6) novoArray[1] = blocoDec;
    if (blocoDec.length === 8) novoArray[2] = blocoDec;
  }
  return novoArray.join("");
};

const encriptado = encrypt(vin);
console.log("Mensagem encriptada", encriptado);

const decriptado = decrypt(encriptado);
console.log("Mensagem decriptada", decriptado);
