import React from "react";

const App = () => {
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto == "notebook"}
          onChange={({ target }) => { setProduto(target.value)}}
        />
        Notebook
      </label>
      <label>
        <input 
        type="radio"
        value="smartphone"
        checked={produto == "smartphone"}
        onChange={({ target }) => { setProduto(target.value)}} />
        Smartphone
      </label>
    </form>
  );
};

export default App;
