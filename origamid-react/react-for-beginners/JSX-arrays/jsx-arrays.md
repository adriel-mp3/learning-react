# Rendering Lists

We can use JavaScript array methods to render items and manipulate data, filter, and so on.

```javascript
const App = () => {
  const products = ["Notebook", "Smartphone", "Tablet"];

  return <p>{products}</p>;
};
```

In this case, it will print each item in the <p> tag without separating or adding a comma.

## Keys

JSX requires a unique key for each element in an array. A well-chosen key helps React accurately infer what has changed and make the correct updates in the DOM tree.

```javascript
const App = () => {
  const books = [
    { name: "A Game of Thrones", age: 1996 },
    { name: "A Clash of Kings", age: 1998 },
    { name: "A Storm of Swords", age: 2000 },
  ];
  return (
    <ul>
      {books
        .filter((book) => book.age >= 1998)
        .map((book) => (
          <li key={book.name}>
            {book.name}, {book.age}
          </li>
        ))}
    </ul>
  );
};
```
