let usuario = {
  nome: "João",
  email: "joao@email.com",
  idade: 18,
  saudacao: function() {
    return "Olá, meu nome é "+ this.nome 
  }
};

for (let chave in usuario) {
  console.log(chave, usuario[chave]);
}

let usuarioAtualizado = {
  ...usuario,
  idade: 19
};

console.log("Original:", usuario);
console.log("Atualizado:", usuarioAtualizado);
console.log(usuario.saudacao());

