import React from "react";

const Product = ({ productsData }) => {
  if (productsData !== null)
  return (
    <section style={{ marginLeft: "1rem" }}>
      <h1>{productsData.id}</h1>
      <p>{productsData.preco}</p>
      <img src={productsData.fotos[0].src} alt="" />
    </section>
  );
};

export default Product;
