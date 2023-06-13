import React from "react";

const Button = ({ text, setProductsData, setLoading }) => {
  async function handleClick() {
    setLoading(true)
    const fetchResponse = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${text}`
    );
    const fetchData = await fetchResponse.json();
    setProductsData(fetchData);
    setLoading(false)
  }
  return (
    <button onClick={handleClick} style={{ marginLeft: "1rem" }}>
      {text}
    </button>
  );
};

export default Button;
