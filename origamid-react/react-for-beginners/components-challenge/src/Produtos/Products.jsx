import React from "react";
import Titulo from "../Titulo/Titulo";
import Product from "./Product";
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Products = () => {
  return (
    <>
      <Titulo text="Produtos" />
      {produtos.map((produto) => (
        <Product key={produto.nome} {...produto} />
      ))}
    </>
  );
};

export default Products;
