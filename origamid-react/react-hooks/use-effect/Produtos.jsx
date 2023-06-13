import React from "react";

const Produtos = ({ preferencia }) => {
  const [dataProdutos, setDataProdutos] = React.useState(null);

  async function fetchProdutos(produto) {
    if (produto !== null) {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`
      );
      const json = await response.json();
      setDataProdutos(json);
    }
  }

  React.useEffect(() => {
    fetchProdutos(preferencia)
  },[preferencia])

  if (dataProdutos === null) return null;
  
  return (
    <div>
      <h1>{dataProdutos.id}</h1>
      <p>R$ {dataProdutos.preco}</p>
    </div>
  );
};

export default Produtos;
