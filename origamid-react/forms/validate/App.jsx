import React from "react";
import Input from "./Input";
import useForm from "./useForm";
const App = () => {
  const cep = useForm('cep');


  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button style={{ marginTop: "0.5rem" }}>Enviar</button>
    </form>
  );
};

export default App;
