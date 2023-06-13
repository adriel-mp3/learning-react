import React from 'react'
import Produtos from './Produtos';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = () => {
  const [preferencia, setPreferencia] = React.useState(null);
  
  
  const handleClick = (event) => {
    const buttonText = event.currentTarget.innerText;
    setPreferencia(buttonText);
  }

  React.useEffect(()=> {
    if (preferencia !== null)
    localStorage.setItem('produto', preferencia);
  }, [preferencia])

  React.useEffect(() =>{
    const preferenciaLocal = localStorage.getItem('produto');
    if (preferenciaLocal !== null) {
      setPreferencia(preferenciaLocal);
    }
  }, [])
  return(<div>
    <h1>Preferência:{preferencia && preferencia + ' '}</h1>
    <button onClick={handleClick} style={{margin:'0.5rem'}}>smartphone</button>
    <button onClick={handleClick} style={{margin:'0.5rem'}}>tablet</button>
    <Produtos preferencia={preferencia}/>
  </div>); 
  
}

export default App
