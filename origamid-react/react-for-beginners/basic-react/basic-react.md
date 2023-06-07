# Basic React

## React Element

- Every React element is created using the `React.createElement` function.

Creating a functional component:
```javascript
function App() {
  return <div id="container">App</div>
}
```

This code is transpiled by **Babel** and transformed into:
```javascript
function App() {
  return React.createElement('div', { id: 'container' }, 'App');
}
```

## A bit about Babel

Babel can transpile React JavaScript code and convert it into a version compatible with older versions of browsers and execution environments.

Additionally, Babel can be configured with plugins and presets to add support for specific React features, such as JSX (JavaScript XML), which is a syntax extension used by React to write user interface components.

### JavaScript {}

By using `{}` in JSX, we can execute JavaScript expressions and display the result in the DOM.

```javascript
function App() {
  const userName = 'Adriel'
  return <div id="container">{'Hello' + userName}.</div>
}
```

### Events

We can assign events directly to elements, in this example, I'll use `onClick={}`.

```javascript
const Produtos = () => {
  function handleClick(event) {
    console.log('Buy: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>T-shirt</button>
      <button onClick={handleClick}>Shorts</button>
    </div>
  );
};
```

### Hooks

With hooks, we can easily synchronize states. Hooks are special functions in React, `useState` enables state synchronization.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### A bit about state

In summary, state in JavaScript is an object that stores dynamic data that can be changed over time. For example, a shopping cart may store the quantity of items that a user has added before finalizing a purchase.

In the context of React, state is an essential part of component development. Each React component can have its own internal state, which, when updated, is automatically reflected in the rendered views.

State allows components to be dynamic and reactive, affecting their behavior and appearance based on changes in the data stored in the state.
