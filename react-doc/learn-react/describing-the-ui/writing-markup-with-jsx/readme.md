# Writing Markup with JSX

JSX is an extension of JavaScript syntax that allows you to write HTML-like markup within a JavaScript file.

While there are other ways to write components, most React developers prefer the conciseness of JSX, and it is widely used in codebases.

## JSX: Putting Markup in JavaScript

The web was built with HTML, CSS, and JavaScript. For many years, web developers kept the content in HTML, the design in CSS, and the logic in JavaScript.

However, as the web became more interactive, logic increasingly determined the content, and JavaScript took on more responsibilities.

That's why in React, the rendering logic and markup live together in the same place - components.

**JSX and React are two separate things. They are often used together, but you can use them independently. JSX is a syntax extension, while React is a JavaScript library.**

## Rules of JSX

1. Always return a single root element.

To return multiple elements from a component, they need to be wrapped in a single parent tag.

````html
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
````

If you don't want to add a <div>, you can use <> and </> to wrap the content.

<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>

This empty tag is called a Fragment. Fragments allow you to group things without leaving a trace in the DOM.

**Why do multiple JSX tags need to be grouped?**

- While JSX looks a lot like HTML, it is transformed into plain JavaScript objects under the hood. In JavaScript, we cannot return two objects without wrapping them in an array.

2. Close all tags.

JSX requires tags to be explicitly closed: self-closing tags like `<img>` should be written as `<img/>`.

```jsx
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>
```

3. CamelCase (almost) everything!!

JSX gets transformed into JavaScript, and attributes written in JSX become keys of JavaScript objects. In our own components, we often want to read these attributes into variables. But JavaScript has limitations on variable names. For example, names cannot contain hyphens or reserved words like class.

That's why in React, many HTML and SVG attributes are written in camelCase. Since class is a reserved word, in React, you write className, named after the corresponding DOM property:

```jsx
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

### Resumo

- React components combine rendering logic with markup because they are related.

- JSX is similar to HTML but has some peculiarities.

- Always pay attention to error messages, as they often point you in the right direction for fixing JSX.


