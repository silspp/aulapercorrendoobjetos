let aluno = {
  nome: "Carlos",
  idade: 20,
  curso: "TI",
};

for (let chave in aluno) {
  console.log(chave, aluno[chave]);
}
