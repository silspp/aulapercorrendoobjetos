let original = {
  nome: "Ana",
  idade: 25
};

let copia = {
  ...original,
  idade: 26
};

console.log(original);
console.log(copia);
