function separacaoCamelCase(palavras, nomeVariavel) {
  let a = nomeVariavel.split(/(?=[A-Z])/);
  for (let i = 0; i < a.length; i++) {
    if (!palavras.includes(a[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

console.log(separacaoCamelCase(["is", "valid", "right"], "isValId"));
