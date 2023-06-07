# JSX

## JavaScript XML / Extension

Extends the syntax of JavaScript, introducing XML-like elements that are converted into React functions.
```javascript
const App = () => {
  return <button>Buy</button>;
};
```
```javascript
Is transformed into
const App = () => {
  return React.createElement('button', null, 'Buy');
};
```

### Attributes

Attributes can be passed just like in HTML, with some special cases, such as `class`, which is a reserved word in JavaScript.
```javascript
const App = () => {
  return <div className="grid">Origamid</div>;
};
```

### Composite Name Attributes

Composite name attributes should be written in camelCase. For example, `autoplay` becomes `autoPlay`.
```javascript
const App = () => {
  return <video autoPlay />;
};
```

### Expressions / Variables

Expressions and variables can be used within JSX by using curly braces `{}`.
```javascript
const App = () => {
  const ativo = true;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};
```

We can also assign JSX directly to a constant/variable.
```javascript
const Titulo = <h1>Meu título</h1>;
```

### JSX Expressions

If the result of the expression is:

- Number
- String
- Array of numbers/strings

***The result will be displayed on the screen.***

If it is:

- Boolean values
- undefined
- null

***Nothing will happen.***

If it is:

Objects

***An error will be returned.***

### Style

The style attribute accepts an object with the element's properties in camelCase.
```javascript

const App = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  );
};
```