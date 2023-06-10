# JavaScript in JSX with Curly Braces

JSX allows us to write HTML-like markup within a JavaScript file, keeping the rendering logic and content in the same place. 

We can add more JavaScript logic or even reference variables within this markup.

In such situations, we use curly braces in our JSX to open a window to JavaScript.

## Passing Strings with Quotes

When we want to pass a string attribute to JSX, we simply enclose it in single or double quotes.

```javascript
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

We can also dynamically specify values using external variables. To enable this, we wrap the variable in curly braces {}.

```javascript
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

**Where to Use Curly Braces**

## You can only use curly braces in two ways within JSX:
 1. As text directly inside a JSX tag. For example, `<h1>{name}'s To-Do List</h1>` works, but `<{tag}>Title</{tag}>` will not work.

 2. As attributes immediately after the equals sign. For example, src={avatar} will read the avatar variable, but `src="{avatar}"` will pass the string `"{avatar}"`.

 ## Using Double Curly Braces: CSS and Other Objects in JSX

In addition to strings, numbers, and other JavaScript expressions, we can also pass objects in JSX

 Objects are also indicated with curly braces, like `{name: 'John', age: 23}`.

 Therefore, to pass a JavaScript object in JSX, you need to wrap the object in another pair of curly braces:`person={{name: 'Fulano', age: 23}}`.

We often see this when using inline CSS styles in JSX. React does not require you to use inline styles, and you can also use classes, which work well in certain. cases. já funcionam bem.
```javascript
 export default function TodoList() {
  const ulStyle = {
    backgroundColor: 'black',
    color: '#fff'
  }
  return (
    <ul style={ulStyle}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

Summary

- JSX attributes in quotes are passed as strings.
- Curly braces allow us to bring JavaScript logic and variables into markup.
- They work within the content of JSX tags or immediately after the equals sign in attributes
- `{{}}` is not a special syntax; it is a JavaScript object enclosed in JSX curly braces.



