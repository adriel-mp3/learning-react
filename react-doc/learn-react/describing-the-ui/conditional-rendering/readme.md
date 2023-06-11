# Conditional Rendering

Our components often need to display different things depending on different conditions. In React, we can conditionally render JSX using JavaScript syntax with if statements, ternary operators, and logical AND operators.

# JSX Conditionally Returning
```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

# Returning Nothing with null

In some situations, we don't want to render anything, so we can return null.
```jsx
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

# Ternary Operator ( ? :)

JavaScript has a concise syntax for writing a conditional expression - the ternary operator.
```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

Logical AND Operator ( &&)
```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

We can read this as "if isPacked, then (&&) render the checkmark, otherwise, render nothing".

Summary
- We can conditionally return JSX with an if statement.
- We can conditionally save some JSX into a variable and then include it within other JSX using curly braces.