import React from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Products from "./Produtos/Products";
import Titulo from "./Titulo/Titulo";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const { pathname } = window.location;
const App = () => {
  return (
    <>
      <Nav />
      {pathname === '/home' ? <Home/> : <Products/>}
    </>
  );
};

export default App;
