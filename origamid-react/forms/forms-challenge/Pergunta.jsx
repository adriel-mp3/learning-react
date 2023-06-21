import React from "react";

const Pergunta = ({ title, options, resposta, setResposta }) => {
    return (
      <form>
        <fieldset style={{ borderColor: "#fff", outline: "none" }}>
          <legend style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            {title}
          </legend>
          {options.map((option) => (
            <div key={option} style={{ padding: ".5rem 1rem" }}>
              <label
                style={{
                  display: "flex",
                  fontFamily: "monospace",
                  fontSize: "1rem",
                }}
              >
                <input
                  type="radio"
                  value={option}
                  checked={option === resposta}
                  onChange={({target}) => setResposta(target.value)}
                  style={{ width: "initial" }}
                />
                {option}
              </label>
            </div>
          ))}
        </fieldset>
      </form>
    );
};

export default Pergunta;
