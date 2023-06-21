import React from "react";
import Pergunta from "./Pergunta";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [pergunta, setPergunta] = React.useState(0);
  const [resposta, setResposta] = React.useState(null);
  const [resultado, setResultado] = React.useState(null)
  const [pontos, setPontos] = React.useState(0);
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    if (resposta === null) {
      return setError(true);
    }
    validaResposta();
    return setError(null);
  };

  const validaResposta = () => {
    if (resposta === perguntas[pergunta].resposta) {
      setPontos(pontos + 1);
    }
    proximaPergunta();
  };

  const proximaPergunta = () => {
    if (pergunta < perguntas.length - 1) {
      return setPergunta(pergunta + 1);
    }
    mostraResultado();
  };

  const mostraResultado = () => {
    setPergunta(null);
    setResultado(true);
  };

  return (
    <div>
      {pergunta !== null && (
        <>
          <Pergunta
            title={perguntas[pergunta].pergunta}
            options={perguntas[pergunta].options}
            resposta={resposta}
            setResposta={setResposta}
          />
          <button style={{ marginTop: "1rem" }} onClick={handleClick}>
            Próxima
          </button>
        </>
      )}
      {error && <p>Responda a pergunta!</p>}
      {resultado && <p>Você acertou {pontos} de {perguntas.length}</p>}
    </div>
  );
};

export default App;
