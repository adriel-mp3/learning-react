import React from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST

const App = () => {
  const [status, setStatus] = React.useState(null);
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let response;
    try {
      response = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        console.log(response);
        setStatus('sucesso');
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro :c");
    } finally {
      console.log("fetch finalizado");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />
        <label htmlFor="cep">Cep</label>
        <input type="text" id="cep" value={form.cep} onChange={handleChange} />
        <label htmlFor="rua">Rua</label>
        <input type="text" id="rua" value={form.rua} onChange={handleChange} />
        <label htmlFor="numero">Numero</label>
        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />
        <button style={{ marginTop: "1rem" }}>Enviar</button>
      </form>
      <p>{status}</p>
    </>
  );
};

export default App;
