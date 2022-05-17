const crypto = (text, code) => {
  let newText = "";
  for (index = 0; index < text.length; index += 1) {
    let convertToAscii = text[index].charCodeAt(0) + code;
    // Caso maior q 255
    convertToAscii = convertToAscii % 256; // 256 => resto 0 => retorna 0
    newText += String.fromCharCode(convertToAscii);
  }

  return newText;
};

word = "MarioKartý";

console.log(crypto(word, 1));
console.log(crypto(crypto(word, 1), -1));
console.log(crypto(crypto(word, 1), -1) == word);

// O médo de multiplicação não dá certo, pos há caracteres em duplicidade
// ascii(100) * 3 = 300 - 255 = ascii(45)
// ascii(15) * 3 = ascii(45)
