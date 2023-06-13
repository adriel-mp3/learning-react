import React from "react";
import Button from "./Button";
import Product from "./Product";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [productsData, setProductsData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  return (
    <div>
      <Button text="notebook" setProductsData={setProductsData} setLoading={setLoading}/>
      <Button text="smartphone" setProductsData={setProductsData} setLoading={setLoading}/>
      <Button text="tablet" setProductsData={setProductsData} setLoading={setLoading}/>
      <Product productsData={productsData} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;
