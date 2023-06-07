import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};
const totalItens = (compras) => {
  const total = compras.reduce((acc, item) => {
    return Number(item.preco.slice(3)) + acc;
  }, 0);
  return total;
};

const App = () => {
  const dados = luana;
  return (
    <ul>
      <li>Nome: {dados.cliente}</li>
      <li>Idade: {dados.idade}</li>
      <li>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </li>
      <li>
        Total gasto:
        {totalItens(dados.compras)}
      </li>
      {totalItens(dados.compras) > 10000 && <li>Você está gastando muito.</li>}
    </ul>
  );
};

export default App;
