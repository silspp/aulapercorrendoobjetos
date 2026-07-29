let produto = {
  nome: "Notebook", // propriedade
  preco: 3500,      // propriedade
  calcularDesconto: function()  { //metodo
    return this.preco * 0.9;
  }
};

console.log(produto.calcularDesconto());
