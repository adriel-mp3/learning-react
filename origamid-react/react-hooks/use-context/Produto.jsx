import React from "react";
import GlobalContext from "./GlobalContext";

const Produto = () => {
  const { dados, limparDados } = React.useContext(GlobalContext);

  const handleClick = () => {
    limparDados();
  };

  if (dados == null) return;
  return(<>
    <ul>
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Limpar Dados</button>
  </>)
  ;
};

export default Produto;
