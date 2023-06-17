import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(()=> {
    fetchDados()
  }, []);

  async function fetchDados() {
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
    const json = await response.json();
    setDados(json);
  }

  function limparDados() {
    setDados(null)
  }

  return (
    <GlobalContext.Provider value={{dados, limparDados}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext